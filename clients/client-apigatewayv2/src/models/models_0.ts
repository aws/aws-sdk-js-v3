// smithy-typescript generated code
import {
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
  ProtocolType,
  RoutingMode,
  SecurityPolicy,
  VpcLinkStatus,
  VpcLinkVersion,
} from "./enums";

/**
 * <p>Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.</p>
 * @public
 */
export interface Cors {
  /**
   * <p>Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs.</p>
   * @public
   */
  AllowCredentials?: boolean | undefined;

  /**
   * <p>Represents a collection of allowed headers. Supported only for HTTP APIs.</p>
   * @public
   */
  AllowHeaders?: string[] | undefined;

  /**
   * <p>Represents a collection of allowed HTTP methods. Supported only for HTTP APIs.</p>
   * @public
   */
  AllowMethods?: string[] | undefined;

  /**
   * <p>Represents a collection of allowed origins. Supported only for HTTP APIs.</p>
   * @public
   */
  AllowOrigins?: string[] | undefined;

  /**
   * <p>Represents a collection of exposed headers. Supported only for HTTP APIs.</p>
   * @public
   */
  ExposeHeaders?: string[] | undefined;

  /**
   * <p>The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs.</p>
   * @public
   */
  MaxAge?: number | undefined;
}

/**
 * <p>Represents an API.</p>
 * @public
 */
export interface Api {
  /**
   * <p>The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>The API ID.</p>
   * @public
   */
  ApiId?: string | undefined;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * <p>The timestamp when the API was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The description of the API.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   * @public
   */
  ImportInfo?: string[] | undefined;

  /**
   * <p>The IP address types that can invoke the API.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The name of the API.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The API protocol.</p>
   * @public
   */
  ProtocolType: ProtocolType | undefined;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   * @public
   */
  RouteSelectionExpression: string | undefined;

  /**
   * <p>A collection of tags associated with the API.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A version identifier for the API.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * <p>Represents an API mapping.</p>
 * @public
 */
export interface ApiMapping {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The API mapping identifier.</p>
   * @public
   */
  ApiMappingId?: string | undefined;

  /**
   * <p>The API mapping key.</p>
   * @public
   */
  ApiMappingKey?: string | undefined;

  /**
   * <p>The API stage.</p>
   * @public
   */
  Stage: string | undefined;
}

/**
 * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
 * @public
 */
export interface JWTConfiguration {
  /**
   * <p>A list of the intended recipients of the JWT. A valid JWT must provide an aud that matches at least one entry in this list. See <a href="https://tools.ietf.org/html/rfc7519#section-4.1.3">RFC 7519</a>. Supported only for HTTP APIs.</p>
   * @public
   */
  Audience?: string[] | undefined;

  /**
   * <p>The base domain of the identity provider that issues JSON Web Tokens. For example, an Amazon Cognito user pool has the following format: https://cognito-idp.<replaceable>\{region\}</replaceable>.amazonaws.com/<replaceable>\{userPoolId\}</replaceable>
   *                . Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   * @public
   */
  Issuer?: string | undefined;
}

/**
 * <p>Represents an authorizer.</p>
 * @public
 */
export interface Authorizer {
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.</p>
   * @public
   */
  AuthorizerCredentialsArn?: string | undefined;

  /**
   * <p>The authorizer identifier.</p>
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   * @public
   */
  AuthorizerPayloadFormatVersion?: string | undefined;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   * @public
   */
  AuthorizerResultTtlInSeconds?: number | undefined;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   * @public
   */
  AuthorizerType?: AuthorizerType | undefined;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>\{account_id\}</replaceable>:function:<replaceable>\{lambda_function_name\}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>\{region\}</replaceable>:lambda:path/<replaceable>\{service_api\}</replaceable>
   *                , where <replaceable></replaceable>\{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   * @public
   */
  AuthorizerUri?: string | undefined;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   * @public
   */
  EnableSimpleResponses?: boolean | undefined;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   * @public
   */
  IdentitySource?: string[] | undefined;

  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   * @public
   */
  IdentityValidationExpression?: string | undefined;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   * @public
   */
  JwtConfiguration?: JWTConfiguration | undefined;

  /**
   * <p>The name of the authorizer.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet.</p>
 * @public
 */
export interface Deployment {
  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   * @public
   */
  AutoDeployed?: boolean | undefined;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The identifier for the deployment.</p>
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   * @public
   */
  DeploymentStatus?: DeploymentStatus | undefined;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   * @public
   */
  DeploymentStatusMessage?: string | undefined;

  /**
   * <p>The description for the deployment.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>The domain name configuration.</p>
 * @public
 */
export interface DomainNameConfiguration {
  /**
   * <p>A domain name for the API.</p>
   * @public
   */
  ApiGatewayDomainName?: string | undefined;

  /**
   * <p>An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.</p>
   * @public
   */
  CertificateName?: string | undefined;

  /**
   * <p>The timestamp when the certificate that was used by edge-optimized endpoint for this domain name was uploaded.</p>
   * @public
   */
  CertificateUploadDate?: Date | undefined;

  /**
   * <p>The status of the domain name migration. The valid values are AVAILABLE, UPDATING, PENDING_CERTIFICATE_REIMPORT, and PENDING_OWNERSHIP_VERIFICATION. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated.</p>
   * @public
   */
  DomainNameStatus?: DomainNameStatus | undefined;

  /**
   * <p>An optional text message containing detailed information about status of the domain name migration.</p>
   * @public
   */
  DomainNameStatusMessage?: string | undefined;

  /**
   * <p>The endpoint type.</p>
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * <p>The Amazon Route 53 Hosted Zone ID of the endpoint.</p>
   * @public
   */
  HostedZoneId?: string | undefined;

  /**
   * <p>The IP address types that can invoke the domain name. Use ipv4 to allow only IPv4 addresses to invoke your domain name, or use dualstack to allow both IPv4 and IPv6 addresses to invoke your domain name.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2.</p>
   * @public
   */
  SecurityPolicy?: SecurityPolicy | undefined;

  /**
   * <p>The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn</p>
   * @public
   */
  OwnershipVerificationCertificateArn?: string | undefined;
}

/**
 * @public
 */
export interface MutualTlsAuthentication {
  /**
   * <p>An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, s3://<replaceable>bucket-name</replaceable>/<replaceable>key-name</replaceable>. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.</p>
   * @public
   */
  TruststoreUri?: string | undefined;

  /**
   * <p>The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.</p>
   * @public
   */
  TruststoreVersion?: string | undefined;

  /**
   * <p>A list of warnings that API Gateway returns while processing your truststore. Invalid certificates produce warnings. Mutual TLS is still enabled, but some clients might not be able to access your API. To resolve warnings, upload a new truststore to S3, and then update you domain name to use the new version.</p>
   * @public
   */
  TruststoreWarnings?: string[] | undefined;
}

/**
 * <p>Represents a domain name.</p>
 * @public
 */
export interface DomainName {
  /**
   * <p>The API mapping selection expression.</p>
   * @public
   */
  ApiMappingSelectionExpression?: string | undefined;

  /**
   * <p>The name of the DomainName resource.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Represents an Amazon Resource Name (ARN).</p>
   * @public
   */
  DomainNameArn?: string | undefined;

  /**
   * <p>The domain name configurations.</p>
   * @public
   */
  DomainNameConfigurations?: DomainNameConfiguration[] | undefined;

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   * @public
   */
  MutualTlsAuthentication?: MutualTlsAuthentication | undefined;

  /**
   * <p>The routing mode.</p>
   * @public
   */
  RoutingMode?: RoutingMode | undefined;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
 * @public
 */
export interface TlsConfig {
  /**
   * <p>If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate. The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting.</p>
   * @public
   */
  ServerNameToVerify?: string | undefined;
}

/**
 * <p>Represents an integration.</p>
 * @public
 */
export interface Integration {
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * <p>Represents the description of an integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Represents the identifier of an integration.</p>
   * @public
   */
  IntegrationId?: string | undefined;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   * @public
   */
  IntegrationMethod?: string | undefined;

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   * @public
   */
  IntegrationResponseSelectionExpression?: string | undefined;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   * @public
   */
  IntegrationSubtype?: string | undefined;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   * @public
   */
  IntegrationUri?: string | undefined;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   * @public
   */
  PassthroughBehavior?: PassthroughBehavior | undefined;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs. Supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html">Working with AWS Lambda proxy integrations for HTTP APIs</a>.</p>
   * @public
   */
  PayloadFormatVersion?: string | undefined;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>\{location\}</replaceable>.<replaceable>\{name\}</replaceable>
   *           , where
   *             <replaceable>\{location\}</replaceable>
   *            is querystring, path, or header; and
   *             <replaceable>\{name\}</replaceable>
   *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   * @public
   */
  RequestParameters?: Record<string, string> | undefined;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestTemplates?: Record<string, string> | undefined;

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   * @public
   */
  ResponseParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   * @public
   */
  TemplateSelectionExpression?: string | undefined;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   * @public
   */
  TimeoutInMillis?: number | undefined;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   * @public
   */
  TlsConfig?: TlsConfig | undefined;
}

/**
 * <p>Represents an integration response.</p>
 * @public
 */
export interface IntegrationResponse {
  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * <p>The integration response ID.</p>
   * @public
   */
  IntegrationResponseId?: string | undefined;

  /**
   * <p>The integration response key.</p>
   * @public
   */
  IntegrationResponseKey: string | undefined;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   * @public
   */
  ResponseParameters?: Record<string, string> | undefined;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   * @public
   */
  ResponseTemplates?: Record<string, string> | undefined;

  /**
   * <p>The template selection expressions for the integration response.</p>
   * @public
   */
  TemplateSelectionExpression?: string | undefined;
}

/**
 * <p>Represents a data model for an API. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response Mappings</a>.</p>
 * @public
 */
export interface Model {
  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The description of the model.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The model identifier.</p>
   * @public
   */
  ModelId?: string | undefined;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   * @public
   */
  Schema?: string | undefined;
}

/**
 * <p>Validation constraints imposed on parameters of a request (path, query string, headers).</p>
 * @public
 */
export interface ParameterConstraints {
  /**
   * <p>Whether or not the parameter is required.</p>
   * @public
   */
  Required?: boolean | undefined;
}

/**
 * <p>Represents a route.</p>
 * @public
 */
export interface Route {
  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   * @public
   */
  ApiKeyRequired?: boolean | undefined;

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   * @public
   */
  AuthorizationScopes?: string[] | undefined;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   * @public
   */
  AuthorizationType?: AuthorizationType | undefined;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * <p>The operation name for the route.</p>
   * @public
   */
  OperationName?: string | undefined;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestModels?: Record<string, string> | undefined;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * <p>The route ID.</p>
   * @public
   */
  RouteId?: string | undefined;

  /**
   * <p>The route key for the route.</p>
   * @public
   */
  RouteKey: string | undefined;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RouteResponseSelectionExpression?: string | undefined;

  /**
   * <p>The target for the route.</p>
   * @public
   */
  Target?: string | undefined;
}

/**
 * <p>Represents a route response.</p>
 * @public
 */
export interface RouteResponse {
  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * <p>Represents the response models of a route response.</p>
   * @public
   */
  ResponseModels?: Record<string, string> | undefined;

  /**
   * <p>Represents the response parameters of a route response.</p>
   * @public
   */
  ResponseParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * <p>Represents the identifier of a route response.</p>
   * @public
   */
  RouteResponseId?: string | undefined;

  /**
   * <p>Represents the route response key of a route response.</p>
   * @public
   */
  RouteResponseKey: string | undefined;
}

/**
 * <p>Represents an InvokeApi action.</p>
 * @public
 */
export interface RoutingRuleActionInvokeApi {
  /**
   * <p>The identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>A string with a length between [1-128].</p>
   * @public
   */
  Stage: string | undefined;

  /**
   * <p>The strip base path setting.</p>
   * @public
   */
  StripBasePath?: boolean | undefined;
}

/**
 * <p>The routing rule action.</p>
 * @public
 */
export interface RoutingRuleAction {
  /**
   * <p>Represents an InvokeApi action.</p>
   * @public
   */
  InvokeApi: RoutingRuleActionInvokeApi | undefined;
}

/**
 * <p>Represents a MatchBasePaths condition.</p>
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
 * <p>Represents a MatchHeaderValue.</p>
 * @public
 */
export interface RoutingRuleMatchHeaderValue {
  /**
   * <p>After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.</p>
   * @public
   */
  Header: string | undefined;

  /**
   * <p>An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.</p>
   * @public
   */
  ValueGlob: string | undefined;
}

/**
 * <p>Represents a MatchHeaders condition.</p>
 * @public
 */
export interface RoutingRuleMatchHeaders {
  /**
   * <p>The header name and header value glob to be matched. The matchHeaders condition is matched if any of the header name and header value globs are matched.</p>
   * @public
   */
  AnyOf: RoutingRuleMatchHeaderValue[] | undefined;
}

/**
 * <p>Represents a routing rule condition.</p>
 * @public
 */
export interface RoutingRuleCondition {
  /**
   * <p>The base path to be matched.</p>
   * @public
   */
  MatchBasePaths?: RoutingRuleMatchBasePaths | undefined;

  /**
   * <p>The headers to be matched.</p>
   * @public
   */
  MatchHeaders?: RoutingRuleMatchHeaders | undefined;
}

/**
 * <p>Represents a routing rule.</p>
 * @public
 */
export interface RoutingRule {
  /**
   * <p>The routing rule action.</p>
   * @public
   */
  Actions?: RoutingRuleAction[] | undefined;

  /**
   * <p>The routing rule condition.</p>
   * @public
   */
  Conditions?: RoutingRuleCondition[] | undefined;

  /**
   * <p>The routing rule priority.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The routing rule ARN.</p>
   * @public
   */
  RoutingRuleArn?: string | undefined;

  /**
   * <p>The routing rule ID.</p>
   * @public
   */
  RoutingRuleId?: string | undefined;
}

/**
 * <p>Settings for logging access in a stage.</p>
 * @public
 */
export interface AccessLogSettings {
  /**
   * <p>The ARN of the CloudWatch Logs log group to receive access logs.</p>
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * <p>A single line format of the access logs of data, as specified by selected $context variables. The format must include at least $context.requestId.</p>
   * @public
   */
  Format?: string | undefined;
}

/**
 * <p>Represents a collection of route settings.</p>
 * @public
 */
export interface RouteSettings {
  /**
   * <p>Specifies whether (true) or not (false) data trace logging is enabled for this route. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.</p>
   * @public
   */
  DataTraceEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether detailed metrics are enabled.</p>
   * @public
   */
  DetailedMetricsEnabled?: boolean | undefined;

  /**
   * <p>Specifies the logging level for this route: INFO, ERROR, or OFF. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.</p>
   * @public
   */
  LoggingLevel?: LoggingLevel | undefined;

  /**
   * <p>Specifies the throttling burst limit.</p>
   * @public
   */
  ThrottlingBurstLimit?: number | undefined;

  /**
   * <p>Specifies the throttling rate limit.</p>
   * @public
   */
  ThrottlingRateLimit?: number | undefined;
}

/**
 * <p>Represents an API stage.</p>
 * @public
 */
export interface Stage {
  /**
   * <p>Settings for logging access in this stage.</p>
   * @public
   */
  AccessLogSettings?: AccessLogSettings | undefined;

  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   * @public
   */
  AutoDeploy?: boolean | undefined;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * <p>The timestamp when the stage was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>Default route settings for the stage.</p>
   * @public
   */
  DefaultRouteSettings?: RouteSettings | undefined;

  /**
   * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * <p>The description of the stage.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   * @public
   */
  LastDeploymentStatusMessage?: string | undefined;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   * @public
   */
  LastUpdatedDate?: Date | undefined;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   * @public
   */
  RouteSettings?: Record<string, RouteSettings> | undefined;

  /**
   * <p>The name of the stage.</p>
   * @public
   */
  StageName: string | undefined;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   * @public
   */
  StageVariables?: Record<string, string> | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Represents a VPC link.</p>
 * @public
 */
export interface VpcLink {
  /**
   * <p>The timestamp when the VPC link was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The name of the VPC link.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>Tags for the VPC link.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The ID of the VPC link.</p>
   * @public
   */
  VpcLinkId: string | undefined;

  /**
   * <p>The status of the VPC link.</p>
   * @public
   */
  VpcLinkStatus?: VpcLinkStatus | undefined;

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   * @public
   */
  VpcLinkStatusMessage?: string | undefined;

  /**
   * <p>The version of the VPC link.</p>
   * @public
   */
  VpcLinkVersion?: VpcLinkVersion | undefined;
}

/**
 * <p>Creates a new Api resource to represent an API.</p>
 * @public
 */
export interface CreateApiRequest {
  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.</p>
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * <p>This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null. Currently, this property is not used for HTTP integrations. Supported only for HTTP APIs.</p>
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * <p>The description of the API.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * <p>The IP address types that can invoke the API.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The name of the API.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The API protocol.</p>
   * @public
   */
  ProtocolType: ProtocolType | undefined;

  /**
   * <p>This property is part of quick create. If you don't specify a routeKey, a default route of $default is created. The $default route acts as a catch-all for any request made to your API, for a particular stage. The $default route key can't be modified. You can add routes after creating the API, and you can update the route keys of additional routes. Supported only for HTTP APIs.</p>
   * @public
   */
  RouteKey?: string | undefined;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>This property is part of quick create. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. Supported only for HTTP APIs.</p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>A version identifier for the API.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface CreateApiResponse {
  /**
   * <p>The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>The API ID.</p>
   * @public
   */
  ApiId?: string | undefined;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * <p>The timestamp when the API was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The description of the API.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   * @public
   */
  ImportInfo?: string[] | undefined;

  /**
   * <p>The IP address types that can invoke the API.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The name of the API.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The API protocol.</p>
   * @public
   */
  ProtocolType?: ProtocolType | undefined;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * <p>A collection of tags associated with the API.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A version identifier for the API.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * <p>Creates a new ApiMapping resource to represent an API mapping.</p>
 * @public
 */
export interface CreateApiMappingRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * The API mapping key.
   * @public
   */
  ApiMappingKey?: string | undefined;

  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The API stage.</p>
   * @public
   */
  Stage: string | undefined;
}

/**
 * @public
 */
export interface CreateApiMappingResponse {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId?: string | undefined;

  /**
   * <p>The API mapping identifier.</p>
   * @public
   */
  ApiMappingId?: string | undefined;

  /**
   * <p>The API mapping key.</p>
   * @public
   */
  ApiMappingKey?: string | undefined;

  /**
   * <p>The API stage.</p>
   * @public
   */
  Stage?: string | undefined;
}

/**
 * <p>Creates a new Authorizer resource to represent an authorizer.</p>
 * @public
 */
export interface CreateAuthorizerRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.</p>
   * @public
   */
  AuthorizerCredentialsArn?: string | undefined;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   * @public
   */
  AuthorizerPayloadFormatVersion?: string | undefined;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   * @public
   */
  AuthorizerResultTtlInSeconds?: number | undefined;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   * @public
   */
  AuthorizerType: AuthorizerType | undefined;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>\{account_id\}</replaceable>:function:<replaceable>\{lambda_function_name\}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>\{region\}</replaceable>:lambda:path/<replaceable>\{service_api\}</replaceable>
   *                , where <replaceable></replaceable>\{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   * @public
   */
  AuthorizerUri?: string | undefined;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   * @public
   */
  EnableSimpleResponses?: boolean | undefined;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   * @public
   */
  IdentitySource: string[] | undefined;

  /**
   * <p>This parameter is not used.</p>
   * @public
   */
  IdentityValidationExpression?: string | undefined;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   * @public
   */
  JwtConfiguration?: JWTConfiguration | undefined;

  /**
   * <p>The name of the authorizer.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateAuthorizerResponse {
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.</p>
   * @public
   */
  AuthorizerCredentialsArn?: string | undefined;

  /**
   * <p>The authorizer identifier.</p>
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   * @public
   */
  AuthorizerPayloadFormatVersion?: string | undefined;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   * @public
   */
  AuthorizerResultTtlInSeconds?: number | undefined;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   * @public
   */
  AuthorizerType?: AuthorizerType | undefined;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>\{account_id\}</replaceable>:function:<replaceable>\{lambda_function_name\}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>\{region\}</replaceable>:lambda:path/<replaceable>\{service_api\}</replaceable>
   *                , where <replaceable></replaceable>\{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   * @public
   */
  AuthorizerUri?: string | undefined;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   * @public
   */
  EnableSimpleResponses?: boolean | undefined;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   * @public
   */
  IdentitySource?: string[] | undefined;

  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   * @public
   */
  IdentityValidationExpression?: string | undefined;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   * @public
   */
  JwtConfiguration?: JWTConfiguration | undefined;

  /**
   * <p>The name of the authorizer.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Creates a new Deployment resource to represent a deployment.</p>
 * @public
 */
export interface CreateDeploymentRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The description for the deployment resource.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the Stage resource for the Deployment resource to create.</p>
   * @public
   */
  StageName?: string | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentResponse {
  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   * @public
   */
  AutoDeployed?: boolean | undefined;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The identifier for the deployment.</p>
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   * @public
   */
  DeploymentStatus?: DeploymentStatus | undefined;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   * @public
   */
  DeploymentStatusMessage?: string | undefined;

  /**
   * <p>The description for the deployment.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface MutualTlsAuthenticationInput {
  /**
   * <p>An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, s3://<replaceable>bucket-name</replaceable>/<replaceable>key-name</replaceable>. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.</p>
   * @public
   */
  TruststoreUri?: string | undefined;

  /**
   * <p>The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.</p>
   * @public
   */
  TruststoreVersion?: string | undefined;
}

/**
 * <p>Creates a new DomainName resource to represent a domain name.</p>
 * @public
 */
export interface CreateDomainNameRequest {
  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name configurations.</p>
   * @public
   */
  DomainNameConfigurations?: DomainNameConfiguration[] | undefined;

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   * @public
   */
  MutualTlsAuthentication?: MutualTlsAuthenticationInput | undefined;

  /**
   * <p>The routing mode.</p>
   * @public
   */
  RoutingMode?: RoutingMode | undefined;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDomainNameResponse {
  /**
   * <p>The API mapping selection expression.</p>
   * @public
   */
  ApiMappingSelectionExpression?: string | undefined;

  /**
   * <p>The name of the DomainName resource.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>Represents an Amazon Resource Name (ARN).</p>
   * @public
   */
  DomainNameArn?: string | undefined;

  /**
   * <p>The domain name configurations.</p>
   * @public
   */
  DomainNameConfigurations?: DomainNameConfiguration[] | undefined;

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   * @public
   */
  MutualTlsAuthentication?: MutualTlsAuthentication | undefined;

  /**
   * <p>The routing mode.</p>
   * @public
   */
  RoutingMode?: RoutingMode | undefined;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
 * @public
 */
export interface TlsConfigInput {
  /**
   * <p>If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate. The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting.</p>
   * @public
   */
  ServerNameToVerify?: string | undefined;
}

/**
 * <p>Creates a new Integration resource to represent an integration.</p>
 * @public
 */
export interface CreateIntegrationRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * <p>The description of the integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   * @public
   */
  IntegrationMethod?: string | undefined;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   * @public
   */
  IntegrationSubtype?: string | undefined;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration. For HTTP API private integrations, use an HTTP_PROXY integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   * @public
   */
  IntegrationType: IntegrationType | undefined;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   * @public
   */
  IntegrationUri?: string | undefined;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   * @public
   */
  PassthroughBehavior?: PassthroughBehavior | undefined;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs. Supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html">Working with AWS Lambda proxy integrations for HTTP APIs</a>.</p>
   * @public
   */
  PayloadFormatVersion?: string | undefined;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>\{location\}</replaceable>.<replaceable>\{name\}</replaceable>
   *                , where
   *                   <replaceable>\{location\}</replaceable>
   *                 is querystring, path, or header; and
   *                   <replaceable>\{name\}</replaceable>
   *                 must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   * @public
   */
  RequestParameters?: Record<string, string> | undefined;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestTemplates?: Record<string, string> | undefined;

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   * @public
   */
  ResponseParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The template selection expression for the integration.</p>
   * @public
   */
  TemplateSelectionExpression?: string | undefined;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   * @public
   */
  TimeoutInMillis?: number | undefined;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   * @public
   */
  TlsConfig?: TlsConfigInput | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationResult {
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * <p>Represents the description of an integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Represents the identifier of an integration.</p>
   * @public
   */
  IntegrationId?: string | undefined;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   * @public
   */
  IntegrationMethod?: string | undefined;

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   * @public
   */
  IntegrationResponseSelectionExpression?: string | undefined;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   * @public
   */
  IntegrationSubtype?: string | undefined;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   * @public
   */
  IntegrationUri?: string | undefined;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   * @public
   */
  PassthroughBehavior?: PassthroughBehavior | undefined;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs. Supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html">Working with AWS Lambda proxy integrations for HTTP APIs</a>.</p>
   * @public
   */
  PayloadFormatVersion?: string | undefined;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>\{location\}</replaceable>.<replaceable>\{name\}</replaceable>
   *           , where
   *             <replaceable>\{location\}</replaceable>
   *            is querystring, path, or header; and
   *             <replaceable>\{name\}</replaceable>
   *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   * @public
   */
  RequestParameters?: Record<string, string> | undefined;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestTemplates?: Record<string, string> | undefined;

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   * @public
   */
  ResponseParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   * @public
   */
  TemplateSelectionExpression?: string | undefined;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   * @public
   */
  TimeoutInMillis?: number | undefined;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   * @public
   */
  TlsConfig?: TlsConfig | undefined;
}

/**
 * <p>Creates a new IntegrationResponse resource to represent an integration response.</p>
 * @public
 */
export interface CreateIntegrationResponseRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * <p>The integration ID.</p>
   * @public
   */
  IntegrationId: string | undefined;

  /**
   * <p>The integration response key.</p>
   * @public
   */
  IntegrationResponseKey: string | undefined;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\}, where \{name\} is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\}, where \{name\} is a valid and unique response header name and \{JSON-expression\} is a valid JSON expression without the $ prefix.</p>
   * @public
   */
  ResponseParameters?: Record<string, string> | undefined;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   * @public
   */
  ResponseTemplates?: Record<string, string> | undefined;

  /**
   * <p>The template selection expression for the integration response. Supported only for WebSocket APIs.</p>
   * @public
   */
  TemplateSelectionExpression?: string | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationResponseResponse {
  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * <p>The integration response ID.</p>
   * @public
   */
  IntegrationResponseId?: string | undefined;

  /**
   * <p>The integration response key.</p>
   * @public
   */
  IntegrationResponseKey?: string | undefined;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   * @public
   */
  ResponseParameters?: Record<string, string> | undefined;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   * @public
   */
  ResponseTemplates?: Record<string, string> | undefined;

  /**
   * <p>The template selection expressions for the integration response.</p>
   * @public
   */
  TemplateSelectionExpression?: string | undefined;
}

/**
 * <p>Creates a new Model.</p>
 * @public
 */
export interface CreateModelRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The description of the model.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   * @public
   */
  Schema: string | undefined;
}

/**
 * @public
 */
export interface CreateModelResponse {
  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The description of the model.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The model identifier.</p>
   * @public
   */
  ModelId?: string | undefined;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   * @public
   */
  Schema?: string | undefined;
}

/**
 * <p>Creates a new Route resource to represent a route.</p>
 * @public
 */
export interface CreateRouteRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies whether an API key is required for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  ApiKeyRequired?: boolean | undefined;

  /**
   * <p>The authorization scopes supported by this route.</p>
   * @public
   */
  AuthorizationScopes?: string[] | undefined;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   * @public
   */
  AuthorizationType?: AuthorizationType | undefined;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * <p>The operation name for the route.</p>
   * @public
   */
  OperationName?: string | undefined;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestModels?: Record<string, string> | undefined;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * <p>The route key for the route.</p>
   * @public
   */
  RouteKey: string | undefined;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RouteResponseSelectionExpression?: string | undefined;

  /**
   * <p>The target for the route.</p>
   * @public
   */
  Target?: string | undefined;
}

/**
 * @public
 */
export interface CreateRouteResult {
  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   * @public
   */
  ApiKeyRequired?: boolean | undefined;

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   * @public
   */
  AuthorizationScopes?: string[] | undefined;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   * @public
   */
  AuthorizationType?: AuthorizationType | undefined;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * <p>The operation name for the route.</p>
   * @public
   */
  OperationName?: string | undefined;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestModels?: Record<string, string> | undefined;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * <p>The route ID.</p>
   * @public
   */
  RouteId?: string | undefined;

  /**
   * <p>The route key for the route.</p>
   * @public
   */
  RouteKey?: string | undefined;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RouteResponseSelectionExpression?: string | undefined;

  /**
   * <p>The target for the route.</p>
   * @public
   */
  Target?: string | undefined;
}

/**
 * <p>Creates a new RouteResponse resource to represent a route response.</p>
 * @public
 */
export interface CreateRouteResponseRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The model selection expression for the route response. Supported only for WebSocket APIs.</p>
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * <p>The response models for the route response.</p>
   * @public
   */
  ResponseModels?: Record<string, string> | undefined;

  /**
   * <p>The route response parameters.</p>
   * @public
   */
  ResponseParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * <p>The route ID.</p>
   * @public
   */
  RouteId: string | undefined;

  /**
   * <p>The route response key.</p>
   * @public
   */
  RouteResponseKey: string | undefined;
}

/**
 * @public
 */
export interface CreateRouteResponseResponse {
  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * <p>Represents the response models of a route response.</p>
   * @public
   */
  ResponseModels?: Record<string, string> | undefined;

  /**
   * <p>Represents the response parameters of a route response.</p>
   * @public
   */
  ResponseParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * <p>Represents the identifier of a route response.</p>
   * @public
   */
  RouteResponseId?: string | undefined;

  /**
   * <p>Represents the route response key of a route response.</p>
   * @public
   */
  RouteResponseKey?: string | undefined;
}

/**
 * @public
 */
export interface CreateRoutingRuleRequest {
  /**
   * <p>Represents a routing rule action. The only supported action is invokeApi.</p>
   * @public
   */
  Actions: RoutingRuleAction[] | undefined;

  /**
   * <p>Represents a condition. Conditions can contain up to two matchHeaders conditions and one matchBasePaths conditions. API Gateway evaluates header conditions and base path conditions together. You can only use AND between header and base path conditions.</p>
   * @public
   */
  Conditions: RoutingRuleCondition[] | undefined;

  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name ID.</p>
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
   * <p>Represents a routing rule action. The only supported action is invokeApi.</p>
   * @public
   */
  Actions?: RoutingRuleAction[] | undefined;

  /**
   * <p>Represents a condition. Conditions can contain up to two matchHeaders conditions and one matchBasePaths conditions. API Gateway evaluates header conditions and base path conditions together. You can only use AND between header and base path conditions.</p>
   * @public
   */
  Conditions?: RoutingRuleCondition[] | undefined;

  /**
   * <p>Represents the priority of the routing rule.<p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The ARN of the domain name.<p>
   * @public
   */
  RoutingRuleArn?: string | undefined;

  /**
   * <p>The routing rule ID.</p>
   * @public
   */
  RoutingRuleId?: string | undefined;
}

/**
 * <p>Creates a new Stage resource to represent a stage.</p>
 * @public
 */
export interface CreateStageRequest {
  /**
   * <p>Settings for logging access in this stage.</p>
   * @public
   */
  AccessLogSettings?: AccessLogSettings | undefined;

  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   * @public
   */
  AutoDeploy?: boolean | undefined;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * <p>The default route settings for the stage.</p>
   * @public
   */
  DefaultRouteSettings?: RouteSettings | undefined;

  /**
   * <p>The deployment identifier of the API stage.</p>
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * <p>The description for the API stage.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   * @public
   */
  RouteSettings?: Record<string, RouteSettings> | undefined;

  /**
   * <p>The name of the stage.</p>
   * @public
   */
  StageName: string | undefined;

  /**
   * <p>A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   * @public
   */
  StageVariables?: Record<string, string> | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateStageResponse {
  /**
   * <p>Settings for logging access in this stage.</p>
   * @public
   */
  AccessLogSettings?: AccessLogSettings | undefined;

  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   * @public
   */
  AutoDeploy?: boolean | undefined;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * <p>The timestamp when the stage was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>Default route settings for the stage.</p>
   * @public
   */
  DefaultRouteSettings?: RouteSettings | undefined;

  /**
   * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * <p>The description of the stage.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   * @public
   */
  LastDeploymentStatusMessage?: string | undefined;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   * @public
   */
  LastUpdatedDate?: Date | undefined;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   * @public
   */
  RouteSettings?: Record<string, RouteSettings> | undefined;

  /**
   * <p>The name of the stage.</p>
   * @public
   */
  StageName?: string | undefined;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   * @public
   */
  StageVariables?: Record<string, string> | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Creates a VPC link</p>
 * @public
 */
export interface CreateVpcLinkRequest {
  /**
   * <p>The name of the VPC link.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateVpcLinkResponse {
  /**
   * <p>The timestamp when the VPC link was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The name of the VPC link.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>Tags for the VPC link.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The ID of the VPC link.</p>
   * @public
   */
  VpcLinkId?: string | undefined;

  /**
   * <p>The status of the VPC link.</p>
   * @public
   */
  VpcLinkStatus?: VpcLinkStatus | undefined;

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   * @public
   */
  VpcLinkStatusMessage?: string | undefined;

  /**
   * <p>The version of the VPC link.</p>
   * @public
   */
  VpcLinkVersion?: VpcLinkVersion | undefined;
}

/**
 * @public
 */
export interface DeleteAccessLogSettingsRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteApiRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApiMappingRequest {
  /**
   * <p>The API mapping identifier.</p>
   * @public
   */
  ApiMappingId: string | undefined;

  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAuthorizerRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The authorizer identifier.</p>
   * @public
   */
  AuthorizerId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCorsConfigurationRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The deployment ID.</p>
   * @public
   */
  DeploymentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainNameRequest {
  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The integration ID.</p>
   * @public
   */
  IntegrationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationResponseRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The integration ID.</p>
   * @public
   */
  IntegrationId: string | undefined;

  /**
   * <p>The integration response ID.</p>
   * @public
   */
  IntegrationResponseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The model ID.</p>
   * @public
   */
  ModelId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The route ID.</p>
   * @public
   */
  RouteId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteRequestParameterRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The route request parameter key.</p>
   * @public
   */
  RequestParameterKey: string | undefined;

  /**
   * <p>The route ID.</p>
   * @public
   */
  RouteId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteResponseRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The route ID.</p>
   * @public
   */
  RouteId: string | undefined;

  /**
   * <p>The route response ID.</p>
   * @public
   */
  RouteResponseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteSettingsRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The route key.</p>
   * @public
   */
  RouteKey: string | undefined;

  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoutingRuleRequest {
  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name ID.</p>
   * @public
   */
  DomainNameId?: string | undefined;

  /**
   * <p>The routing rule ID.</p>
   * @public
   */
  RoutingRuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStageRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcLinkRequest {
  /**
   * <p>The ID of the VPC link.</p>
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
export interface ExportApiRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The version of the API Gateway export algorithm. API Gateway uses the latest version by default. Currently, the only supported version is 1.0.</p>
   * @public
   */
  ExportVersion?: string | undefined;

  /**
   * <p>Specifies whether to include <a href="https://docs.aws.amazon.com//apigateway/latest/developerguide/api-gateway-swagger-extensions.html">API Gateway extensions</a> in the exported API definition. API Gateway extensions are included by default.</p>
   * @public
   */
  IncludeExtensions?: boolean | undefined;

  /**
   * <p>The output type of the exported definition file. Valid values are JSON and YAML.</p>
   * @public
   */
  OutputType: string | undefined;

  /**
   * <p>The version of the API specification to use. OAS30, for OpenAPI 3.0, is the only supported value.</p>
   * @public
   */
  Specification: string | undefined;

  /**
   * <p>The name of the API stage to export. If you don't specify this property, a representation of the latest API configuration is exported.</p>
   * @public
   */
  StageName?: string | undefined;
}

/**
 * @public
 */
export interface ExportApiResponse {
  /**
   * <p>Represents an exported definition of an API in a particular output format, for example, YAML. The API is serialized to the requested specification, for example, OpenAPI 3.0.</p>
   * @public
   */
  body?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface GetApiRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;
}

/**
 * @public
 */
export interface GetApiResponse {
  /**
   * <p>The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>The API ID.</p>
   * @public
   */
  ApiId?: string | undefined;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * <p>The timestamp when the API was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The description of the API.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   * @public
   */
  ImportInfo?: string[] | undefined;

  /**
   * <p>The IP address types that can invoke the API.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The name of the API.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The API protocol.</p>
   * @public
   */
  ProtocolType?: ProtocolType | undefined;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * <p>A collection of tags associated with the API.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A version identifier for the API.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * @public
 */
export interface GetApiMappingRequest {
  /**
   * <p>The API mapping identifier.</p>
   * @public
   */
  ApiMappingId: string | undefined;

  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface GetApiMappingResponse {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId?: string | undefined;

  /**
   * <p>The API mapping identifier.</p>
   * @public
   */
  ApiMappingId?: string | undefined;

  /**
   * <p>The API mapping key.</p>
   * @public
   */
  ApiMappingKey?: string | undefined;

  /**
   * <p>The API stage.</p>
   * @public
   */
  Stage?: string | undefined;
}

/**
 * @public
 */
export interface GetApiMappingsRequest {
  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetApiMappingsResponse {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: ApiMapping[] | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetApisRequest {
  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetApisResponse {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: Api[] | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAuthorizerRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The authorizer identifier.</p>
   * @public
   */
  AuthorizerId: string | undefined;
}

/**
 * @public
 */
export interface GetAuthorizerResponse {
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.</p>
   * @public
   */
  AuthorizerCredentialsArn?: string | undefined;

  /**
   * <p>The authorizer identifier.</p>
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   * @public
   */
  AuthorizerPayloadFormatVersion?: string | undefined;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   * @public
   */
  AuthorizerResultTtlInSeconds?: number | undefined;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   * @public
   */
  AuthorizerType?: AuthorizerType | undefined;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>\{account_id\}</replaceable>:function:<replaceable>\{lambda_function_name\}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>\{region\}</replaceable>:lambda:path/<replaceable>\{service_api\}</replaceable>
   *                , where <replaceable></replaceable>\{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   * @public
   */
  AuthorizerUri?: string | undefined;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   * @public
   */
  EnableSimpleResponses?: boolean | undefined;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   * @public
   */
  IdentitySource?: string[] | undefined;

  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   * @public
   */
  IdentityValidationExpression?: string | undefined;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   * @public
   */
  JwtConfiguration?: JWTConfiguration | undefined;

  /**
   * <p>The name of the authorizer.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface GetAuthorizersRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAuthorizersResponse {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: Authorizer[] | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The deployment ID.</p>
   * @public
   */
  DeploymentId: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentResponse {
  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   * @public
   */
  AutoDeployed?: boolean | undefined;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The identifier for the deployment.</p>
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   * @public
   */
  DeploymentStatus?: DeploymentStatus | undefined;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   * @public
   */
  DeploymentStatusMessage?: string | undefined;

  /**
   * <p>The description for the deployment.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentsRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentsResponse {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: Deployment[] | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDomainNameRequest {
  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface GetDomainNameResponse {
  /**
   * <p>The API mapping selection expression.</p>
   * @public
   */
  ApiMappingSelectionExpression?: string | undefined;

  /**
   * <p>The name of the DomainName resource.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>Represents an Amazon Resource Name (ARN).</p>
   * @public
   */
  DomainNameArn?: string | undefined;

  /**
   * <p>The domain name configurations.</p>
   * @public
   */
  DomainNameConfigurations?: DomainNameConfiguration[] | undefined;

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   * @public
   */
  MutualTlsAuthentication?: MutualTlsAuthentication | undefined;

  /**
   * <p>The routing mode.</p>
   * @public
   */
  RoutingMode?: RoutingMode | undefined;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDomainNamesRequest {
  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDomainNamesResponse {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: DomainName[] | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The integration ID.</p>
   * @public
   */
  IntegrationId: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResult {
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * <p>Represents the description of an integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Represents the identifier of an integration.</p>
   * @public
   */
  IntegrationId?: string | undefined;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   * @public
   */
  IntegrationMethod?: string | undefined;

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   * @public
   */
  IntegrationResponseSelectionExpression?: string | undefined;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   * @public
   */
  IntegrationSubtype?: string | undefined;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   * @public
   */
  IntegrationUri?: string | undefined;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   * @public
   */
  PassthroughBehavior?: PassthroughBehavior | undefined;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs. Supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html">Working with AWS Lambda proxy integrations for HTTP APIs</a>.</p>
   * @public
   */
  PayloadFormatVersion?: string | undefined;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>\{location\}</replaceable>.<replaceable>\{name\}</replaceable>
   *           , where
   *             <replaceable>\{location\}</replaceable>
   *            is querystring, path, or header; and
   *             <replaceable>\{name\}</replaceable>
   *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   * @public
   */
  RequestParameters?: Record<string, string> | undefined;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestTemplates?: Record<string, string> | undefined;

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   * @public
   */
  ResponseParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   * @public
   */
  TemplateSelectionExpression?: string | undefined;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   * @public
   */
  TimeoutInMillis?: number | undefined;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   * @public
   */
  TlsConfig?: TlsConfig | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResponseRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The integration ID.</p>
   * @public
   */
  IntegrationId: string | undefined;

  /**
   * <p>The integration response ID.</p>
   * @public
   */
  IntegrationResponseId: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResponseResponse {
  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * <p>The integration response ID.</p>
   * @public
   */
  IntegrationResponseId?: string | undefined;

  /**
   * <p>The integration response key.</p>
   * @public
   */
  IntegrationResponseKey?: string | undefined;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   * @public
   */
  ResponseParameters?: Record<string, string> | undefined;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   * @public
   */
  ResponseTemplates?: Record<string, string> | undefined;

  /**
   * <p>The template selection expressions for the integration response.</p>
   * @public
   */
  TemplateSelectionExpression?: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResponsesRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The integration ID.</p>
   * @public
   */
  IntegrationId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResponsesResponse {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: IntegrationResponse[] | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationsRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationsResponse {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: Integration[] | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetModelRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The model ID.</p>
   * @public
   */
  ModelId: string | undefined;
}

/**
 * @public
 */
export interface GetModelResponse {
  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The description of the model.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The model identifier.</p>
   * @public
   */
  ModelId?: string | undefined;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   * @public
   */
  Schema?: string | undefined;
}

/**
 * @public
 */
export interface GetModelsRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetModelsResponse {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: Model[] | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetModelTemplateRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The model ID.</p>
   * @public
   */
  ModelId: string | undefined;
}

/**
 * @public
 */
export interface GetModelTemplateResponse {
  /**
   * <p>The template value.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface GetRouteRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The route ID.</p>
   * @public
   */
  RouteId: string | undefined;
}

/**
 * @public
 */
export interface GetRouteResult {
  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   * @public
   */
  ApiKeyRequired?: boolean | undefined;

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   * @public
   */
  AuthorizationScopes?: string[] | undefined;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   * @public
   */
  AuthorizationType?: AuthorizationType | undefined;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * <p>The operation name for the route.</p>
   * @public
   */
  OperationName?: string | undefined;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestModels?: Record<string, string> | undefined;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * <p>The route ID.</p>
   * @public
   */
  RouteId?: string | undefined;

  /**
   * <p>The route key for the route.</p>
   * @public
   */
  RouteKey?: string | undefined;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RouteResponseSelectionExpression?: string | undefined;

  /**
   * <p>The target for the route.</p>
   * @public
   */
  Target?: string | undefined;
}

/**
 * @public
 */
export interface GetRouteResponseRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The route ID.</p>
   * @public
   */
  RouteId: string | undefined;

  /**
   * <p>The route response ID.</p>
   * @public
   */
  RouteResponseId: string | undefined;
}

/**
 * @public
 */
export interface GetRouteResponseResponse {
  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * <p>Represents the response models of a route response.</p>
   * @public
   */
  ResponseModels?: Record<string, string> | undefined;

  /**
   * <p>Represents the response parameters of a route response.</p>
   * @public
   */
  ResponseParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * <p>Represents the identifier of a route response.</p>
   * @public
   */
  RouteResponseId?: string | undefined;

  /**
   * <p>Represents the route response key of a route response.</p>
   * @public
   */
  RouteResponseKey?: string | undefined;
}

/**
 * @public
 */
export interface GetRouteResponsesRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The route ID.</p>
   * @public
   */
  RouteId: string | undefined;
}

/**
 * @public
 */
export interface GetRouteResponsesResponse {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: RouteResponse[] | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRoutesRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRoutesResponse {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: Route[] | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRoutingRuleRequest {
  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name ID.</p>
   * @public
   */
  DomainNameId?: string | undefined;

  /**
   * <p>The routing rule ID.</p>
   * @public
   */
  RoutingRuleId: string | undefined;
}

/**
 * @public
 */
export interface GetRoutingRuleResponse {
  /**
   * <p>The resulting action based on matching a routing rules condition. Only InvokeApi is supported.</p>
   * @public
   */
  Actions?: RoutingRuleAction[] | undefined;

  /**
   * <p>The conditions of the routing rule.</p>
   * @public
   */
  Conditions?: RoutingRuleCondition[] | undefined;

  /**
   * <p>The order in which API Gateway evaluates a rule. Priority is evaluated from the lowest value to the highest value.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The routing rule ARN.</p>
   * @public
   */
  RoutingRuleArn?: string | undefined;

  /**
   * <p>The routing rule ID.</p>
   * @public
   */
  RoutingRuleId?: string | undefined;
}

/**
 * @public
 */
export interface GetStageRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface GetStageResponse {
  /**
   * <p>Settings for logging access in this stage.</p>
   * @public
   */
  AccessLogSettings?: AccessLogSettings | undefined;

  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   * @public
   */
  AutoDeploy?: boolean | undefined;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * <p>The timestamp when the stage was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>Default route settings for the stage.</p>
   * @public
   */
  DefaultRouteSettings?: RouteSettings | undefined;

  /**
   * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * <p>The description of the stage.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   * @public
   */
  LastDeploymentStatusMessage?: string | undefined;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   * @public
   */
  LastUpdatedDate?: Date | undefined;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   * @public
   */
  RouteSettings?: Record<string, RouteSettings> | undefined;

  /**
   * <p>The name of the stage.</p>
   * @public
   */
  StageName?: string | undefined;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   * @public
   */
  StageVariables?: Record<string, string> | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetStagesRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetStagesResponse {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: Stage[] | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTagsRequest {
  /**
   * <p>The resource ARN for the tag.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetTagsResponse {
  /**
   * <p>Represents a collection of tags associated with the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetVpcLinkRequest {
  /**
   * <p>The ID of the VPC link.</p>
   * @public
   */
  VpcLinkId: string | undefined;
}

/**
 * @public
 */
export interface GetVpcLinkResponse {
  /**
   * <p>The timestamp when the VPC link was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The name of the VPC link.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>Tags for the VPC link.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The ID of the VPC link.</p>
   * @public
   */
  VpcLinkId?: string | undefined;

  /**
   * <p>The status of the VPC link.</p>
   * @public
   */
  VpcLinkStatus?: VpcLinkStatus | undefined;

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   * @public
   */
  VpcLinkStatusMessage?: string | undefined;

  /**
   * <p>The version of the VPC link.</p>
   * @public
   */
  VpcLinkVersion?: VpcLinkVersion | undefined;
}

/**
 * @public
 */
export interface GetVpcLinksRequest {
  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetVpcLinksResponse {
  /**
   * <p>A collection of VPC links.</p>
   * @public
   */
  Items?: VpcLink[] | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ImportApiRequest {
  /**
   * <p>Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.</p>
   * @public
   */
  Basepath?: string | undefined;

  /**
   * <p>The OpenAPI definition. Supported only for HTTP APIs.</p>
   * @public
   */
  Body: string | undefined;

  /**
   * <p>Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.</p>
   * @public
   */
  FailOnWarnings?: boolean | undefined;
}

/**
 * @public
 */
export interface ImportApiResponse {
  /**
   * <p>The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>The API ID.</p>
   * @public
   */
  ApiId?: string | undefined;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * <p>The timestamp when the API was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The description of the API.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   * @public
   */
  ImportInfo?: string[] | undefined;

  /**
   * <p>The IP address types that can invoke the API.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The name of the API.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The API protocol.</p>
   * @public
   */
  ProtocolType?: ProtocolType | undefined;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * <p>A collection of tags associated with the API.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A version identifier for the API.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * @public
 */
export interface ListRoutingRulesRequest {
  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name ID.</p>
   * @public
   */
  DomainNameId?: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingRulesResponse {
  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The routing rules.<p>
   * @public
   */
  RoutingRules?: RoutingRule[] | undefined;
}

/**
 * @public
 */
export interface PutRoutingRuleRequest {
  /**
   * <p>The routing rule action.</p>
   * @public
   */
  Actions: RoutingRuleAction[] | undefined;

  /**
   * <p>The routing rule condition.</p>
   * @public
   */
  Conditions: RoutingRuleCondition[] | undefined;

  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name ID.</p>
   * @public
   */
  DomainNameId?: string | undefined;

  /**
   * <p>The routing rule priority.</p>
   * @public
   */
  Priority: number | undefined;

  /**
   * <p>The routing rule ID.</p>
   * @public
   */
  RoutingRuleId: string | undefined;
}

/**
 * @public
 */
export interface PutRoutingRuleResponse {
  /**
   * <p>The routing rule action.</p>
   * @public
   */
  Actions?: RoutingRuleAction[] | undefined;

  /**
   * <p>The conditions of the routing rule.</p>
   * @public
   */
  Conditions?: RoutingRuleCondition[] | undefined;

  /**
   * <p>The routing rule priority.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The routing rule ARN.</p>
   * @public
   */
  RoutingRuleArn?: string | undefined;

  /**
   * <p>The routing rule ID.</p>
   * @public
   */
  RoutingRuleId?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ReimportApiRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.</p>
   * @public
   */
  Basepath?: string | undefined;

  /**
   * <p>The OpenAPI definition. Supported only for HTTP APIs.</p>
   * @public
   */
  Body: string | undefined;

  /**
   * <p>Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.</p>
   * @public
   */
  FailOnWarnings?: boolean | undefined;
}

/**
 * @public
 */
export interface ReimportApiResponse {
  /**
   * <p>The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>The API ID.</p>
   * @public
   */
  ApiId?: string | undefined;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * <p>The timestamp when the API was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The description of the API.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   * @public
   */
  ImportInfo?: string[] | undefined;

  /**
   * <p>The IP address types that can invoke the API.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The name of the API.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The API protocol.</p>
   * @public
   */
  ProtocolType?: ProtocolType | undefined;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * <p>A collection of tags associated with the API.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A version identifier for the API.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * @public
 */
export interface ResetAuthorizersCacheRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.</p>
   * @public
   */
  StageName: string | undefined;
}

/**
 * <p>Creates a new Tag resource to represent a tag.</p>
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The resource ARN for the tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
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
   * <p>The resource ARN for the tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The Tag keys to delete</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * <p>Updates an Api.</p>
 * @public
 */
export interface UpdateApiRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * <p>This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, don't specify this parameter. Currently, this property is not used for HTTP integrations. If provided, this value replaces the credentials associated with the quick create integration. Supported only for HTTP APIs.</p>
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * <p>The description of the API.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * <p>The IP address types that can invoke your API or domain name.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The name of the API.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>This property is part of quick create. If not specified, the route created using quick create is kept. Otherwise, this value replaces the route key of the quick create route. Additional routes may still be added after the API is updated. Supported only for HTTP APIs.</p>
   * @public
   */
  RouteKey?: string | undefined;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * <p>This property is part of quick create. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. The value provided updates the integration URI and integration type. You can update a quick-created target, but you can't remove it from an API. Supported only for HTTP APIs.</p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>A version identifier for the API.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApiResponse {
  /**
   * <p>The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>The API ID.</p>
   * @public
   */
  ApiId?: string | undefined;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * <p>The timestamp when the API was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The description of the API.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   * @public
   */
  ImportInfo?: string[] | undefined;

  /**
   * <p>The IP address types that can invoke the API.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The name of the API.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The API protocol.</p>
   * @public
   */
  ProtocolType?: ProtocolType | undefined;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * <p>A collection of tags associated with the API.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A version identifier for the API.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * <p>Updates an ApiMapping.</p>
 * @public
 */
export interface UpdateApiMappingRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The API mapping identifier.</p>
   * @public
   */
  ApiMappingId: string | undefined;

  /**
   * <p>The API mapping key.</p>
   * @public
   */
  ApiMappingKey?: string | undefined;

  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The API stage.</p>
   * @public
   */
  Stage?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApiMappingResponse {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId?: string | undefined;

  /**
   * <p>The API mapping identifier.</p>
   * @public
   */
  ApiMappingId?: string | undefined;

  /**
   * <p>The API mapping key.</p>
   * @public
   */
  ApiMappingKey?: string | undefined;

  /**
   * <p>The API stage.</p>
   * @public
   */
  Stage?: string | undefined;
}

/**
 * <p>Updates an Authorizer.</p>
 * @public
 */
export interface UpdateAuthorizerRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter.</p>
   * @public
   */
  AuthorizerCredentialsArn?: string | undefined;

  /**
   * <p>The authorizer identifier.</p>
   * @public
   */
  AuthorizerId: string | undefined;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   * @public
   */
  AuthorizerPayloadFormatVersion?: string | undefined;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   * @public
   */
  AuthorizerResultTtlInSeconds?: number | undefined;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   * @public
   */
  AuthorizerType?: AuthorizerType | undefined;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>\{account_id\}</replaceable>:function:<replaceable>\{lambda_function_name\}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>\{region\}</replaceable>:lambda:path/<replaceable>\{service_api\}</replaceable>
   *                , where <replaceable></replaceable>\{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   * @public
   */
  AuthorizerUri?: string | undefined;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   * @public
   */
  EnableSimpleResponses?: boolean | undefined;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   * @public
   */
  IdentitySource?: string[] | undefined;

  /**
   * <p>This parameter is not used.</p>
   * @public
   */
  IdentityValidationExpression?: string | undefined;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   * @public
   */
  JwtConfiguration?: JWTConfiguration | undefined;

  /**
   * <p>The name of the authorizer.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAuthorizerResponse {
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.</p>
   * @public
   */
  AuthorizerCredentialsArn?: string | undefined;

  /**
   * <p>The authorizer identifier.</p>
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   * @public
   */
  AuthorizerPayloadFormatVersion?: string | undefined;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   * @public
   */
  AuthorizerResultTtlInSeconds?: number | undefined;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   * @public
   */
  AuthorizerType?: AuthorizerType | undefined;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>\{account_id\}</replaceable>:function:<replaceable>\{lambda_function_name\}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>\{region\}</replaceable>:lambda:path/<replaceable>\{service_api\}</replaceable>
   *                , where <replaceable></replaceable>\{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   * @public
   */
  AuthorizerUri?: string | undefined;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   * @public
   */
  EnableSimpleResponses?: boolean | undefined;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   * @public
   */
  IdentitySource?: string[] | undefined;

  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   * @public
   */
  IdentityValidationExpression?: string | undefined;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   * @public
   */
  JwtConfiguration?: JWTConfiguration | undefined;

  /**
   * <p>The name of the authorizer.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Updates a Deployment.</p>
 * @public
 */
export interface UpdateDeploymentRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The deployment ID.</p>
   * @public
   */
  DeploymentId: string | undefined;

  /**
   * <p>The description for the deployment resource.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDeploymentResponse {
  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   * @public
   */
  AutoDeployed?: boolean | undefined;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The identifier for the deployment.</p>
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   * @public
   */
  DeploymentStatus?: DeploymentStatus | undefined;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   * @public
   */
  DeploymentStatusMessage?: string | undefined;

  /**
   * <p>The description for the deployment.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Updates a DomainName.</p>
 * @public
 */
export interface UpdateDomainNameRequest {
  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name configurations.</p>
   * @public
   */
  DomainNameConfigurations?: DomainNameConfiguration[] | undefined;

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   * @public
   */
  MutualTlsAuthentication?: MutualTlsAuthenticationInput | undefined;

  /**
   * <p>The routing mode.</p>
   * @public
   */
  RoutingMode?: RoutingMode | undefined;
}

/**
 * @public
 */
export interface UpdateDomainNameResponse {
  /**
   * <p>The API mapping selection expression.</p>
   * @public
   */
  ApiMappingSelectionExpression?: string | undefined;

  /**
   * <p>The name of the DomainName resource.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>Represents an Amazon Resource Name (ARN).</p>
   * @public
   */
  DomainNameArn?: string | undefined;

  /**
   * <p>The domain name configurations.</p>
   * @public
   */
  DomainNameConfigurations?: DomainNameConfiguration[] | undefined;

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   * @public
   */
  MutualTlsAuthentication?: MutualTlsAuthentication | undefined;

  /**
   * <p>The routing mode.</p>
   * @public
   */
  RoutingMode?: RoutingMode | undefined;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Updates an Integration.</p>
 * @public
 */
export interface UpdateIntegrationRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * <p>The description of the integration</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The integration ID.</p>
   * @public
   */
  IntegrationId: string | undefined;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   * @public
   */
  IntegrationMethod?: string | undefined;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   * @public
   */
  IntegrationSubtype?: string | undefined;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration. For HTTP API private integrations, use an HTTP_PROXY integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   * @public
   */
  IntegrationUri?: string | undefined;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   * @public
   */
  PassthroughBehavior?: PassthroughBehavior | undefined;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs. Supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html">Working with AWS Lambda proxy integrations for HTTP APIs</a>.</p>
   * @public
   */
  PayloadFormatVersion?: string | undefined;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>\{location\}</replaceable>.<replaceable>\{name\}</replaceable>
   *           , where
   *             <replaceable>\{location\}</replaceable>
   *            is querystring, path, or header; and
   *             <replaceable>\{name\}</replaceable>
   *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   * @public
   */
  RequestParameters?: Record<string, string> | undefined;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestTemplates?: Record<string, string> | undefined;

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   * @public
   */
  ResponseParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The template selection expression for the integration.</p>
   * @public
   */
  TemplateSelectionExpression?: string | undefined;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   * @public
   */
  TimeoutInMillis?: number | undefined;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   * @public
   */
  TlsConfig?: TlsConfigInput | undefined;
}

/**
 * @public
 */
export interface UpdateIntegrationResult {
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * <p>Represents the description of an integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Represents the identifier of an integration.</p>
   * @public
   */
  IntegrationId?: string | undefined;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   * @public
   */
  IntegrationMethod?: string | undefined;

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   * @public
   */
  IntegrationResponseSelectionExpression?: string | undefined;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   * @public
   */
  IntegrationSubtype?: string | undefined;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   * @public
   */
  IntegrationUri?: string | undefined;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   * @public
   */
  PassthroughBehavior?: PassthroughBehavior | undefined;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs. Supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html">Working with AWS Lambda proxy integrations for HTTP APIs</a>.</p>
   * @public
   */
  PayloadFormatVersion?: string | undefined;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>\{location\}</replaceable>.<replaceable>\{name\}</replaceable>
   *           , where
   *             <replaceable>\{location\}</replaceable>
   *            is querystring, path, or header; and
   *             <replaceable>\{name\}</replaceable>
   *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   * @public
   */
  RequestParameters?: Record<string, string> | undefined;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestTemplates?: Record<string, string> | undefined;

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   * @public
   */
  ResponseParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   * @public
   */
  TemplateSelectionExpression?: string | undefined;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   * @public
   */
  TimeoutInMillis?: number | undefined;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   * @public
   */
  TlsConfig?: TlsConfig | undefined;
}

/**
 * <p>Updates an IntegrationResponses.</p>
 * @public
 */
export interface UpdateIntegrationResponseRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * <p>The integration ID.</p>
   * @public
   */
  IntegrationId: string | undefined;

  /**
   * <p>The integration response ID.</p>
   * @public
   */
  IntegrationResponseId: string | undefined;

  /**
   * <p>The integration response key.</p>
   * @public
   */
  IntegrationResponseKey?: string | undefined;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.<replaceable>\{name\}</replaceable>
   *                , where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.<replaceable>\{name\}</replaceable>
   *                 or integration.response.body.<replaceable>\{JSON-expression\}</replaceable>
   *                , where
   *                   <replaceable>\{name\}</replaceable>
   *                 is a valid and unique response header name and
   *                   <replaceable>\{JSON-expression\}</replaceable>
   *                 is a valid JSON expression without the $ prefix.</p>
   * @public
   */
  ResponseParameters?: Record<string, string> | undefined;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   * @public
   */
  ResponseTemplates?: Record<string, string> | undefined;

  /**
   * <p>The template selection expression for the integration response. Supported only for WebSocket APIs.</p>
   * @public
   */
  TemplateSelectionExpression?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIntegrationResponseResponse {
  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * <p>The integration response ID.</p>
   * @public
   */
  IntegrationResponseId?: string | undefined;

  /**
   * <p>The integration response key.</p>
   * @public
   */
  IntegrationResponseKey?: string | undefined;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   * @public
   */
  ResponseParameters?: Record<string, string> | undefined;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   * @public
   */
  ResponseTemplates?: Record<string, string> | undefined;

  /**
   * <p>The template selection expressions for the integration response.</p>
   * @public
   */
  TemplateSelectionExpression?: string | undefined;
}

/**
 * <p>Updates a Model.</p>
 * @public
 */
export interface UpdateModelRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The description of the model.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The model ID.</p>
   * @public
   */
  ModelId: string | undefined;

  /**
   * <p>The name of the model.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   * @public
   */
  Schema?: string | undefined;
}

/**
 * @public
 */
export interface UpdateModelResponse {
  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The description of the model.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The model identifier.</p>
   * @public
   */
  ModelId?: string | undefined;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   * @public
   */
  Schema?: string | undefined;
}

/**
 * <p>Updates a Route.</p>
 * @public
 */
export interface UpdateRouteRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies whether an API key is required for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  ApiKeyRequired?: boolean | undefined;

  /**
   * <p>The authorization scopes supported by this route.</p>
   * @public
   */
  AuthorizationScopes?: string[] | undefined;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   * @public
   */
  AuthorizationType?: AuthorizationType | undefined;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * <p>The operation name for the route.</p>
   * @public
   */
  OperationName?: string | undefined;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestModels?: Record<string, string> | undefined;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * <p>The route ID.</p>
   * @public
   */
  RouteId: string | undefined;

  /**
   * <p>The route key for the route.</p>
   * @public
   */
  RouteKey?: string | undefined;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RouteResponseSelectionExpression?: string | undefined;

  /**
   * <p>The target for the route.</p>
   * @public
   */
  Target?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRouteResult {
  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   * @public
   */
  ApiKeyRequired?: boolean | undefined;

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   * @public
   */
  AuthorizationScopes?: string[] | undefined;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   * @public
   */
  AuthorizationType?: AuthorizationType | undefined;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * <p>The operation name for the route.</p>
   * @public
   */
  OperationName?: string | undefined;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestModels?: Record<string, string> | undefined;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RequestParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * <p>The route ID.</p>
   * @public
   */
  RouteId?: string | undefined;

  /**
   * <p>The route key for the route.</p>
   * @public
   */
  RouteKey?: string | undefined;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   * @public
   */
  RouteResponseSelectionExpression?: string | undefined;

  /**
   * <p>The target for the route.</p>
   * @public
   */
  Target?: string | undefined;
}

/**
 * <p>Updates a RouteResponse.</p>
 * @public
 */
export interface UpdateRouteResponseRequest {
  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The model selection expression for the route response. Supported only for WebSocket APIs.</p>
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * <p>The response models for the route response.</p>
   * @public
   */
  ResponseModels?: Record<string, string> | undefined;

  /**
   * <p>The route response parameters.</p>
   * @public
   */
  ResponseParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * <p>The route ID.</p>
   * @public
   */
  RouteId: string | undefined;

  /**
   * <p>The route response ID.</p>
   * @public
   */
  RouteResponseId: string | undefined;

  /**
   * <p>The route response key.</p>
   * @public
   */
  RouteResponseKey?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRouteResponseResponse {
  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * <p>Represents the response models of a route response.</p>
   * @public
   */
  ResponseModels?: Record<string, string> | undefined;

  /**
   * <p>Represents the response parameters of a route response.</p>
   * @public
   */
  ResponseParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * <p>Represents the identifier of a route response.</p>
   * @public
   */
  RouteResponseId?: string | undefined;

  /**
   * <p>Represents the route response key of a route response.</p>
   * @public
   */
  RouteResponseKey?: string | undefined;
}

/**
 * <p>Updates a Stage.</p>
 * @public
 */
export interface UpdateStageRequest {
  /**
   * <p>Settings for logging access in this stage.</p>
   * @public
   */
  AccessLogSettings?: AccessLogSettings | undefined;

  /**
   * <p>The API identifier.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   * @public
   */
  AutoDeploy?: boolean | undefined;

  /**
   * <p>The identifier of a client certificate for a Stage.</p>
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * <p>The default route settings for the stage.</p>
   * @public
   */
  DefaultRouteSettings?: RouteSettings | undefined;

  /**
   * <p>The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled.</p>
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * <p>The description for the API stage.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Route settings for the stage.</p>
   * @public
   */
  RouteSettings?: Record<string, RouteSettings> | undefined;

  /**
   * <p>The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.</p>
   * @public
   */
  StageName: string | undefined;

  /**
   * <p>A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   * @public
   */
  StageVariables?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateStageResponse {
  /**
   * <p>Settings for logging access in this stage.</p>
   * @public
   */
  AccessLogSettings?: AccessLogSettings | undefined;

  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   * @public
   */
  AutoDeploy?: boolean | undefined;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * <p>The timestamp when the stage was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>Default route settings for the stage.</p>
   * @public
   */
  DefaultRouteSettings?: RouteSettings | undefined;

  /**
   * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * <p>The description of the stage.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   * @public
   */
  LastDeploymentStatusMessage?: string | undefined;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   * @public
   */
  LastUpdatedDate?: Date | undefined;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   * @public
   */
  RouteSettings?: Record<string, RouteSettings> | undefined;

  /**
   * <p>The name of the stage.</p>
   * @public
   */
  StageName?: string | undefined;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   * @public
   */
  StageVariables?: Record<string, string> | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Updates a VPC link.</p>
 * @public
 */
export interface UpdateVpcLinkRequest {
  /**
   * <p>The name of the VPC link.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the VPC link.</p>
   * @public
   */
  VpcLinkId: string | undefined;
}

/**
 * @public
 */
export interface UpdateVpcLinkResponse {
  /**
   * <p>The timestamp when the VPC link was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The name of the VPC link.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>Tags for the VPC link.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The ID of the VPC link.</p>
   * @public
   */
  VpcLinkId?: string | undefined;

  /**
   * <p>The status of the VPC link.</p>
   * @public
   */
  VpcLinkStatus?: VpcLinkStatus | undefined;

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   * @public
   */
  VpcLinkStatusMessage?: string | undefined;

  /**
   * <p>The version of the VPC link.</p>
   * @public
   */
  VpcLinkVersion?: VpcLinkVersion | undefined;
}
