import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.</p>
 */
export interface Cors {
  /**
   * <p>Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs.</p>
   */
  AllowCredentials?: boolean;

  /**
   * <p>Represents a collection of allowed headers. Supported only for HTTP APIs.</p>
   */
  AllowHeaders?: string[];

  /**
   * <p>Represents a collection of allowed HTTP methods. Supported only for HTTP APIs.</p>
   */
  AllowMethods?: string[];

  /**
   * <p>Represents a collection of allowed origins. Supported only for HTTP APIs.</p>
   */
  AllowOrigins?: string[];

  /**
   * <p>Represents a collection of exposed headers. Supported only for HTTP APIs.</p>
   */
  ExposeHeaders?: string[];

  /**
   * <p>The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs.</p>
   */
  MaxAge?: number;
}

export namespace Cors {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Cors): any => ({
    ...obj,
  });
}

export enum ProtocolType {
  HTTP = "HTTP",
  WEBSOCKET = "WEBSOCKET",
}

/**
 * <p>Represents an API.</p>
 */
export interface Api {
  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>The name of the API.</p>
   */
  Name: string | undefined;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType: ProtocolType | string | undefined;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression: string | undefined;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];
}

export namespace Api {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Api): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an API mapping.</p>
 */
export interface ApiMapping {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId?: string;

  /**
   * <p>The API mapping key.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The API stage.</p>
   */
  Stage: string | undefined;
}

export namespace ApiMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApiMapping): any => ({
    ...obj,
  });
}

export enum AuthorizerType {
  JWT = "JWT",
  REQUEST = "REQUEST",
}

/**
 * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
 */
export interface JWTConfiguration {
  /**
   * <p>A list of the intended recipients of the JWT. A valid JWT must provide an aud that matches at least one entry in this list. See <a href="https://tools.ietf.org/html/rfc7519#section-4.1.3">RFC 7519</a>. Supported only for HTTP APIs.</p>
   */
  Audience?: string[];

  /**
   * <p>The base domain of the identity provider that issues JSON Web Tokens. For example, an Amazon Cognito user pool has the following format: https://cognito-idp.<replaceable>{region}</replaceable>.amazonaws.com/<replaceable>{userPoolId}</replaceable>
   *                . Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  Issuer?: string;
}

export namespace JWTConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JWTConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an authorizer.</p>
 */
export interface Authorizer {
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   */
  AuthorizerPayloadFormatVersion?: string;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   */
  EnableSimpleResponses?: boolean;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   */
  IdentitySource?: string[];

  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name: string | undefined;
}

export namespace Authorizer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Authorizer): any => ({
    ...obj,
  });
}

export enum DeploymentStatus {
  DEPLOYED = "DEPLOYED",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

/**
 * <p>An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet.</p>
 */
export interface Deployment {
  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   */
  AutoDeployed?: boolean;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The identifier for the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   */
  DeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   */
  DeploymentStatusMessage?: string;

  /**
   * <p>The description for the deployment.</p>
   */
  Description?: string;
}

export namespace Deployment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Deployment): any => ({
    ...obj,
  });
}

export enum DomainNameStatus {
  AVAILABLE = "AVAILABLE",
  PENDING_CERTIFICATE_REIMPORT = "PENDING_CERTIFICATE_REIMPORT",
  PENDING_OWNERSHIP_VERIFICATION = "PENDING_OWNERSHIP_VERIFICATION",
  UPDATING = "UPDATING",
}

export enum EndpointType {
  EDGE = "EDGE",
  REGIONAL = "REGIONAL",
}

export enum SecurityPolicy {
  TLS_1_0 = "TLS_1_0",
  TLS_1_2 = "TLS_1_2",
}

/**
 * <p>The domain name configuration.</p>
 */
export interface DomainNameConfiguration {
  /**
   * <p>A domain name for the API.</p>
   */
  ApiGatewayDomainName?: string;

  /**
   * <p>An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.</p>
   */
  CertificateName?: string;

  /**
   * <p>The timestamp when the certificate that was used by edge-optimized endpoint for this domain name was uploaded.</p>
   */
  CertificateUploadDate?: Date;

  /**
   * <p>The status of the domain name migration. The valid values are AVAILABLE, UPDATING, PENDING_CERTIFICATE_REIMPORT, and PENDING_OWNERSHIP_VERIFICATION. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated.</p>
   */
  DomainNameStatus?: DomainNameStatus | string;

  /**
   * <p>An optional text message containing detailed information about status of the domain name migration.</p>
   */
  DomainNameStatusMessage?: string;

  /**
   * <p>The endpoint type.</p>
   */
  EndpointType?: EndpointType | string;

  /**
   * <p>The Amazon Route 53 Hosted Zone ID of the endpoint.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2.</p>
   */
  SecurityPolicy?: SecurityPolicy | string;

  /**
   * <p>The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn</p>
   */
  OwnershipVerificationCertificateArn?: string;
}

export namespace DomainNameConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainNameConfiguration): any => ({
    ...obj,
  });
}

export interface MutualTlsAuthentication {
  /**
   * <p>An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, s3://<replaceable>bucket-name</replaceable>/<replaceable>key-name</replaceable>. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.</p>
   */
  TruststoreUri?: string;

  /**
   * <p>The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.</p>
   */
  TruststoreVersion?: string;

  /**
   * <p>A list of warnings that API Gateway returns while processing your truststore. Invalid certificates produce warnings. Mutual TLS is still enabled, but some clients might not be able to access your API. To resolve warnings, upload a new truststore to S3, and then update you domain name to use the new version.</p>
   */
  TruststoreWarnings?: string[];
}

export namespace MutualTlsAuthentication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MutualTlsAuthentication): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a domain name.</p>
 */
export interface DomainName {
  /**
   * <p>The API mapping selection expression.</p>
   */
  ApiMappingSelectionExpression?: string;

  /**
   * <p>The name of the DomainName resource.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   */
  MutualTlsAuthentication?: MutualTlsAuthentication;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace DomainName {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainName): any => ({
    ...obj,
  });
}

export enum ConnectionType {
  INTERNET = "INTERNET",
  VPC_LINK = "VPC_LINK",
}

export enum ContentHandlingStrategy {
  CONVERT_TO_BINARY = "CONVERT_TO_BINARY",
  CONVERT_TO_TEXT = "CONVERT_TO_TEXT",
}

export enum IntegrationType {
  AWS = "AWS",
  AWS_PROXY = "AWS_PROXY",
  HTTP = "HTTP",
  HTTP_PROXY = "HTTP_PROXY",
  MOCK = "MOCK",
}

export enum PassthroughBehavior {
  NEVER = "NEVER",
  WHEN_NO_MATCH = "WHEN_NO_MATCH",
  WHEN_NO_TEMPLATES = "WHEN_NO_TEMPLATES",
}

/**
 * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
 */
export interface TlsConfig {
  /**
   * <p>If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate. The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting.</p>
   */
  ServerNameToVerify?: string;
}

export namespace TlsConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TlsConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an integration.</p>
 */
export interface Integration {
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>Represents the description of an integration.</p>
   */
  Description?: string;

  /**
   * <p>Represents the identifier of an integration.</p>
   */
  IntegrationId?: string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   */
  IntegrationResponseSelectionExpression?: string;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   */
  IntegrationSubtype?: string;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
   *           , where
   *             <replaceable>{location}</replaceable>
   *            is querystring, path, or header; and
   *             <replaceable>{name}</replaceable>
   *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API itegrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  RequestParameters?: { [key: string]: string };

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  ResponseParameters?: { [key: string]: { [key: string]: string } };

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfig;
}

export namespace Integration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Integration): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an integration response.</p>
 */
export interface IntegrationResponse {
  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId?: string;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey: string | undefined;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: { [key: string]: string };

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: { [key: string]: string };

  /**
   * <p>The template selection expressions for the integration response.</p>
   */
  TemplateSelectionExpression?: string;
}

export namespace IntegrationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntegrationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a data model for an API. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response Mappings</a>.</p>
 */
export interface Model {
  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The model identifier.</p>
   */
  ModelId?: string;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name: string | undefined;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema?: string;
}

export namespace Model {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Model): any => ({
    ...obj,
  });
}

export enum AuthorizationType {
  AWS_IAM = "AWS_IAM",
  CUSTOM = "CUSTOM",
  JWT = "JWT",
  NONE = "NONE",
}

/**
 * <p>Validation constraints imposed on parameters of a request (path, query string, headers).</p>
 */
export interface ParameterConstraints {
  /**
   * <p>Whether or not the parameter is required.</p>
   */
  Required?: boolean;
}

export namespace ParameterConstraints {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterConstraints): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a route.</p>
 */
export interface Route {
  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: { [key: string]: string };

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>The route ID.</p>
   */
  RouteId?: string;

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey: string | undefined;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;
}

export namespace Route {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Route): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a route response.</p>
 */
export interface RouteResponse {
  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>Represents the response models of a route response.</p>
   */
  ResponseModels?: { [key: string]: string };

  /**
   * <p>Represents the response parameters of a route response.</p>
   */
  ResponseParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>Represents the identifier of a route response.</p>
   */
  RouteResponseId?: string;

  /**
   * <p>Represents the route response key of a route response.</p>
   */
  RouteResponseKey: string | undefined;
}

export namespace RouteResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Settings for logging access in a stage.</p>
 */
export interface AccessLogSettings {
  /**
   * <p>The ARN of the CloudWatch Logs log group to receive access logs.</p>
   */
  DestinationArn?: string;

  /**
   * <p>A single line format of the access logs of data, as specified by selected $context variables. The format must include at least $context.requestId.</p>
   */
  Format?: string;
}

export namespace AccessLogSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessLogSettings): any => ({
    ...obj,
  });
}

export enum LoggingLevel {
  ERROR = "ERROR",
  INFO = "INFO",
  OFF = "OFF",
}

/**
 * <p>Represents a collection of route settings.</p>
 */
export interface RouteSettings {
  /**
   * <p>Specifies whether (true) or not (false) data trace logging is enabled for this route. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.</p>
   */
  DataTraceEnabled?: boolean;

  /**
   * <p>Specifies whether detailed metrics are enabled.</p>
   */
  DetailedMetricsEnabled?: boolean;

  /**
   * <p>Specifies the logging level for this route: INFO, ERROR, or OFF. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.</p>
   */
  LoggingLevel?: LoggingLevel | string;

  /**
   * <p>Specifies the throttling burst limit.</p>
   */
  ThrottlingBurstLimit?: number;

  /**
   * <p>Specifies the throttling rate limit.</p>
   */
  ThrottlingRateLimit?: number;
}

export namespace RouteSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteSettings): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an API stage.</p>
 */
export interface Stage {
  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The timestamp when the stage was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>Default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   */
  LastDeploymentStatusMessage?: string;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   */
  RouteSettings?: { [key: string]: RouteSettings };

  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace Stage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Stage): any => ({
    ...obj,
  });
}

export enum VpcLinkStatus {
  AVAILABLE = "AVAILABLE",
  DELETING = "DELETING",
  FAILED = "FAILED",
  INACTIVE = "INACTIVE",
  PENDING = "PENDING",
}

export enum VpcLinkVersion {
  V2 = "V2",
}

/**
 * <p>Represents a VPC link.</p>
 */
export interface VpcLink {
  /**
   * <p>The timestamp when the VPC link was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The name of the VPC link.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>Tags for the VPC link.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId: string | undefined;

  /**
   * <p>The status of the VPC link.</p>
   */
  VpcLinkStatus?: VpcLinkStatus | string;

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   */
  VpcLinkStatusMessage?: string;

  /**
   * <p>The version of the VPC link.</p>
   */
  VpcLinkVersion?: VpcLinkVersion | string;
}

export namespace VpcLink {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcLink): any => ({
    ...obj,
  });
}

export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * <p>Describes the error encountered.</p>
   */
  Message?: string;
}

export namespace BadRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>Describes the error encountered.</p>
   */
  Message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new Api resource to represent an API.</p>
 */
export interface CreateApiRequest {
  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null. Currently, this property is not used for HTTP integrations. Supported only for HTTP APIs.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The name of the API.</p>
   */
  Name: string | undefined;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType: ProtocolType | string | undefined;

  /**
   * <p>This property is part of quick create. If you don't specify a routeKey, a default route of $default is created. The $default route acts as a catch-all for any request made to your API, for a particular stage. The $default route key can't be modified. You can add routes after creating the API, and you can update the route keys of additional routes. Supported only for HTTP APIs.</p>
   */
  RouteKey?: string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>This property is part of quick create. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. Supported only for HTTP APIs.</p>
   */
  Target?: string;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;
}

export namespace CreateApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApiRequest): any => ({
    ...obj,
  });
}

export interface CreateApiResponse {
  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType?: ProtocolType | string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];
}

export namespace CreateApiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApiResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource specified in the request was not found. See the message field for more information.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * <p>Describes the error encountered.</p>
   */
  Message?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;
}

export namespace NotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>A limit has been exceeded. See the accompanying error message for details.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * <p>The limit type.</p>
   */
  LimitType?: string;

  /**
   * <p>Describes the error encountered.</p>
   */
  Message?: string;
}

export namespace TooManyRequestsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new ApiMapping resource to represent an API mapping.</p>
 */
export interface CreateApiMappingRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * The API mapping key.
   */
  ApiMappingKey?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The API stage.</p>
   */
  Stage: string | undefined;
}

export namespace CreateApiMappingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApiMappingRequest): any => ({
    ...obj,
  });
}

export interface CreateApiMappingResponse {
  /**
   * <p>The API identifier.</p>
   */
  ApiId?: string;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId?: string;

  /**
   * <p>The API mapping key.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The API stage.</p>
   */
  Stage?: string;
}

export namespace CreateApiMappingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApiMappingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new Authorizer resource to represent an authorizer.</p>
 */
export interface CreateAuthorizerRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   */
  AuthorizerPayloadFormatVersion?: string;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   */
  AuthorizerType: AuthorizerType | string | undefined;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   */
  EnableSimpleResponses?: boolean;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   */
  IdentitySource: string[] | undefined;

  /**
   * <p>This parameter is not used.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name: string | undefined;
}

export namespace CreateAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface CreateAuthorizerResponse {
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   */
  AuthorizerPayloadFormatVersion?: string;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   */
  EnableSimpleResponses?: boolean;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   */
  IdentitySource?: string[];

  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name?: string;
}

export namespace CreateAuthorizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAuthorizerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new Deployment resource to represent a deployment.</p>
 */
export interface CreateDeploymentRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The description for the deployment resource.</p>
   */
  Description?: string;

  /**
   * <p>The name of the Stage resource for the Deployment resource to create.</p>
   */
  StageName?: string;
}

export namespace CreateDeploymentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeploymentRequest): any => ({
    ...obj,
  });
}

export interface CreateDeploymentResponse {
  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   */
  AutoDeployed?: boolean;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The identifier for the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   */
  DeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   */
  DeploymentStatusMessage?: string;

  /**
   * <p>The description for the deployment.</p>
   */
  Description?: string;
}

export namespace CreateDeploymentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeploymentResponse): any => ({
    ...obj,
  });
}

export interface MutualTlsAuthenticationInput {
  /**
   * <p>An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, s3://<replaceable>bucket-name</replaceable>/<replaceable>key-name</replaceable>. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.</p>
   */
  TruststoreUri?: string;

  /**
   * <p>The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.</p>
   */
  TruststoreVersion?: string;
}

export namespace MutualTlsAuthenticationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MutualTlsAuthenticationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new DomainName resource to represent a domain name.</p>
 */
export interface CreateDomainNameRequest {
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   */
  MutualTlsAuthentication?: MutualTlsAuthenticationInput;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDomainNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainNameRequest): any => ({
    ...obj,
  });
}

export interface CreateDomainNameResponse {
  /**
   * <p>The API mapping selection expression.</p>
   */
  ApiMappingSelectionExpression?: string;

  /**
   * <p>The name of the DomainName resource.</p>
   */
  DomainName?: string;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   */
  MutualTlsAuthentication?: MutualTlsAuthentication;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDomainNameResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainNameResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
 */
export interface TlsConfigInput {
  /**
   * <p>If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate. The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting.</p>
   */
  ServerNameToVerify?: string;
}

export namespace TlsConfigInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TlsConfigInput): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new Integration resource to represent an integration.</p>
 */
export interface CreateIntegrationRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>The description of the integration.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   */
  IntegrationSubtype?: string;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration. For HTTP API private integrations, use an HTTP_PROXY integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType: IntegrationType | string | undefined;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
   *                , where
   *                   <replaceable>{location}</replaceable>
   *                 is querystring, path, or header; and
   *                   <replaceable>{name}</replaceable>
   *                 must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  RequestParameters?: { [key: string]: string };

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  ResponseParameters?: { [key: string]: { [key: string]: string } };

  /**
   * <p>The template selection expression for the integration.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfigInput;
}

export namespace CreateIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIntegrationRequest): any => ({
    ...obj,
  });
}

export interface CreateIntegrationResult {
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>Represents the description of an integration.</p>
   */
  Description?: string;

  /**
   * <p>Represents the identifier of an integration.</p>
   */
  IntegrationId?: string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   */
  IntegrationResponseSelectionExpression?: string;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   */
  IntegrationSubtype?: string;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
   *           , where
   *             <replaceable>{location}</replaceable>
   *            is querystring, path, or header; and
   *             <replaceable>{name}</replaceable>
   *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API itegrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  RequestParameters?: { [key: string]: string };

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  ResponseParameters?: { [key: string]: { [key: string]: string } };

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfig;
}

export namespace CreateIntegrationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIntegrationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new IntegrationResponse resource to represent an integration response.</p>
 */
export interface CreateIntegrationResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey: string | undefined;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where {name} is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where {name} is a valid and unique response header name and {JSON-expression} is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: { [key: string]: string };

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: { [key: string]: string };

  /**
   * <p>The template selection expression for the integration response. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;
}

export namespace CreateIntegrationResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIntegrationResponseRequest): any => ({
    ...obj,
  });
}

export interface CreateIntegrationResponseResponse {
  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId?: string;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey?: string;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: { [key: string]: string };

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: { [key: string]: string };

  /**
   * <p>The template selection expressions for the integration response.</p>
   */
  TemplateSelectionExpression?: string;
}

export namespace CreateIntegrationResponseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIntegrationResponseResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new Model.</p>
 */
export interface CreateModelRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name: string | undefined;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema: string | undefined;
}

export namespace CreateModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelRequest): any => ({
    ...obj,
  });
}

export interface CreateModelResponse {
  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The model identifier.</p>
   */
  ModelId?: string;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name?: string;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema?: string;
}

export namespace CreateModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new Route resource to represent a route.</p>
 */
export interface CreateRouteRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies whether an API key is required for the route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>The authorization scopes supported by this route.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: { [key: string]: string };

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey: string | undefined;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;
}

export namespace CreateRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteRequest): any => ({
    ...obj,
  });
}

export interface CreateRouteResult {
  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: { [key: string]: string };

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>The route ID.</p>
   */
  RouteId?: string;

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey?: string;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;
}

export namespace CreateRouteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteResult): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new RouteResponse resource to represent a route response.</p>
 */
export interface CreateRouteResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The model selection expression for the route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The response models for the route response.</p>
   */
  ResponseModels?: { [key: string]: string };

  /**
   * <p>The route response parameters.</p>
   */
  ResponseParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The route response key.</p>
   */
  RouteResponseKey: string | undefined;
}

export namespace CreateRouteResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteResponseRequest): any => ({
    ...obj,
  });
}

export interface CreateRouteResponseResponse {
  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>Represents the response models of a route response.</p>
   */
  ResponseModels?: { [key: string]: string };

  /**
   * <p>Represents the response parameters of a route response.</p>
   */
  ResponseParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>Represents the identifier of a route response.</p>
   */
  RouteResponseId?: string;

  /**
   * <p>Represents the route response key of a route response.</p>
   */
  RouteResponseKey?: string;
}

export namespace CreateRouteResponseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteResponseResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new Stage resource to represent a stage.</p>
 */
export interface CreateStageRequest {
  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The deployment identifier of the API stage.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The description for the API stage.</p>
   */
  Description?: string;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   */
  RouteSettings?: { [key: string]: RouteSettings };

  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * <p>A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateStageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStageRequest): any => ({
    ...obj,
  });
}

export interface CreateStageResponse {
  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The timestamp when the stage was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>Default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   */
  LastDeploymentStatusMessage?: string;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   */
  RouteSettings?: { [key: string]: RouteSettings };

  /**
   * <p>The name of the stage.</p>
   */
  StageName?: string;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateStageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a VPC link</p>
 */
export interface CreateVpcLinkRequest {
  /**
   * <p>The name of the VPC link.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of tags.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateVpcLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcLinkRequest): any => ({
    ...obj,
  });
}

export interface CreateVpcLinkResponse {
  /**
   * <p>The timestamp when the VPC link was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The name of the VPC link.</p>
   */
  Name?: string;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Tags for the VPC link.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId?: string;

  /**
   * <p>The status of the VPC link.</p>
   */
  VpcLinkStatus?: VpcLinkStatus | string;

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   */
  VpcLinkStatusMessage?: string;

  /**
   * <p>The version of the VPC link.</p>
   */
  VpcLinkVersion?: VpcLinkVersion | string;
}

export namespace CreateVpcLinkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcLinkResponse): any => ({
    ...obj,
  });
}

export interface DeleteAccessLogSettingsRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;
}

export namespace DeleteAccessLogSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccessLogSettingsRequest): any => ({
    ...obj,
  });
}

export interface DeleteApiRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace DeleteApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApiRequest): any => ({
    ...obj,
  });
}

export interface DeleteApiMappingRequest {
  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId: string | undefined;

  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;
}

export namespace DeleteApiMappingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApiMappingRequest): any => ({
    ...obj,
  });
}

export interface DeleteAuthorizerRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId: string | undefined;
}

export namespace DeleteAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface DeleteCorsConfigurationRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace DeleteCorsConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCorsConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteDeploymentRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The deployment ID.</p>
   */
  DeploymentId: string | undefined;
}

export namespace DeleteDeploymentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDeploymentRequest): any => ({
    ...obj,
  });
}

export interface DeleteDomainNameRequest {
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;
}

export namespace DeleteDomainNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainNameRequest): any => ({
    ...obj,
  });
}

export interface DeleteIntegrationRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;
}

export namespace DeleteIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIntegrationRequest): any => ({
    ...obj,
  });
}

export interface DeleteIntegrationResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId: string | undefined;
}

export namespace DeleteIntegrationResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIntegrationResponseRequest): any => ({
    ...obj,
  });
}

export interface DeleteModelRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The model ID.</p>
   */
  ModelId: string | undefined;
}

export namespace DeleteModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteModelRequest): any => ({
    ...obj,
  });
}

export interface DeleteRouteRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;
}

export namespace DeleteRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRouteRequest): any => ({
    ...obj,
  });
}

export interface DeleteRouteRequestParameterRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The route request parameter key.</p>
   */
  RequestParameterKey: string | undefined;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;
}

export namespace DeleteRouteRequestParameterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRouteRequestParameterRequest): any => ({
    ...obj,
  });
}

export interface DeleteRouteResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The route response ID.</p>
   */
  RouteResponseId: string | undefined;
}

export namespace DeleteRouteResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRouteResponseRequest): any => ({
    ...obj,
  });
}

export interface DeleteRouteSettingsRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The route key.</p>
   */
  RouteKey: string | undefined;

  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;
}

export namespace DeleteRouteSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRouteSettingsRequest): any => ({
    ...obj,
  });
}

export interface DeleteStageRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;
}

export namespace DeleteStageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStageRequest): any => ({
    ...obj,
  });
}

export interface DeleteVpcLinkRequest {
  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId: string | undefined;
}

export namespace DeleteVpcLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpcLinkRequest): any => ({
    ...obj,
  });
}

export interface DeleteVpcLinkResponse {}

export namespace DeleteVpcLinkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpcLinkResponse): any => ({
    ...obj,
  });
}

export interface ExportApiRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The version of the API Gateway export algorithm. API Gateway uses the latest version by default. Currently, the only supported version is 1.0.</p>
   */
  ExportVersion?: string;

  /**
   * <p>Specifies whether to include <a href="https://docs.aws.amazon.com//apigateway/latest/developerguide/api-gateway-swagger-extensions.html">API Gateway extensions</a> in the exported API definition. API Gateway extensions are included by default.</p>
   */
  IncludeExtensions?: boolean;

  /**
   * <p>The output type of the exported definition file. Valid values are JSON and YAML.</p>
   */
  OutputType: string | undefined;

  /**
   * <p>The version of the API specification to use. OAS30, for OpenAPI 3.0, is the only supported value.</p>
   */
  Specification: string | undefined;

  /**
   * <p>The name of the API stage to export. If you don't specify this property, a representation of the latest API configuration is exported.</p>
   */
  StageName?: string;
}

export namespace ExportApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportApiRequest): any => ({
    ...obj,
  });
}

export interface ExportApiResponse {
  /**
   * <p>Represents an exported definition of an API in a particular output format, for example, YAML. The API is serialized to the requested specification, for example, OpenAPI 3.0.</p>
   */
  body?: Uint8Array;
}

export namespace ExportApiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportApiResponse): any => ({
    ...obj,
  });
}

export interface GetApiRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace GetApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApiRequest): any => ({
    ...obj,
  });
}

export interface GetApiResponse {
  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType?: ProtocolType | string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];
}

export namespace GetApiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApiResponse): any => ({
    ...obj,
  });
}

export interface GetApiMappingRequest {
  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId: string | undefined;

  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;
}

export namespace GetApiMappingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApiMappingRequest): any => ({
    ...obj,
  });
}

export interface GetApiMappingResponse {
  /**
   * <p>The API identifier.</p>
   */
  ApiId?: string;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId?: string;

  /**
   * <p>The API mapping key.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The API stage.</p>
   */
  Stage?: string;
}

export namespace GetApiMappingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApiMappingResponse): any => ({
    ...obj,
  });
}

export interface GetApiMappingsRequest {
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetApiMappingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApiMappingsRequest): any => ({
    ...obj,
  });
}

export interface GetApiMappingsResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: ApiMapping[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetApiMappingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApiMappingsResponse): any => ({
    ...obj,
  });
}

export interface GetApisRequest {
  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetApisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApisRequest): any => ({
    ...obj,
  });
}

export interface GetApisResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Api[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetApisResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApisResponse): any => ({
    ...obj,
  });
}

export interface GetAuthorizerRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId: string | undefined;
}

export namespace GetAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface GetAuthorizerResponse {
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   */
  AuthorizerPayloadFormatVersion?: string;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   */
  EnableSimpleResponses?: boolean;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   */
  IdentitySource?: string[];

  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name?: string;
}

export namespace GetAuthorizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAuthorizerResponse): any => ({
    ...obj,
  });
}

export interface GetAuthorizersRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetAuthorizersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAuthorizersRequest): any => ({
    ...obj,
  });
}

export interface GetAuthorizersResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Authorizer[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetAuthorizersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAuthorizersResponse): any => ({
    ...obj,
  });
}

export interface GetDeploymentRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The deployment ID.</p>
   */
  DeploymentId: string | undefined;
}

export namespace GetDeploymentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeploymentRequest): any => ({
    ...obj,
  });
}

export interface GetDeploymentResponse {
  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   */
  AutoDeployed?: boolean;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The identifier for the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   */
  DeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   */
  DeploymentStatusMessage?: string;

  /**
   * <p>The description for the deployment.</p>
   */
  Description?: string;
}

export namespace GetDeploymentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeploymentResponse): any => ({
    ...obj,
  });
}

export interface GetDeploymentsRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetDeploymentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeploymentsRequest): any => ({
    ...obj,
  });
}

export interface GetDeploymentsResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Deployment[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetDeploymentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeploymentsResponse): any => ({
    ...obj,
  });
}

export interface GetDomainNameRequest {
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;
}

export namespace GetDomainNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainNameRequest): any => ({
    ...obj,
  });
}

export interface GetDomainNameResponse {
  /**
   * <p>The API mapping selection expression.</p>
   */
  ApiMappingSelectionExpression?: string;

  /**
   * <p>The name of the DomainName resource.</p>
   */
  DomainName?: string;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   */
  MutualTlsAuthentication?: MutualTlsAuthentication;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetDomainNameResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainNameResponse): any => ({
    ...obj,
  });
}

export interface GetDomainNamesRequest {
  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetDomainNamesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainNamesRequest): any => ({
    ...obj,
  });
}

export interface GetDomainNamesResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: DomainName[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetDomainNamesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainNamesResponse): any => ({
    ...obj,
  });
}

export interface GetIntegrationRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;
}

export namespace GetIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIntegrationRequest): any => ({
    ...obj,
  });
}

export interface GetIntegrationResult {
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>Represents the description of an integration.</p>
   */
  Description?: string;

  /**
   * <p>Represents the identifier of an integration.</p>
   */
  IntegrationId?: string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   */
  IntegrationResponseSelectionExpression?: string;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   */
  IntegrationSubtype?: string;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
   *           , where
   *             <replaceable>{location}</replaceable>
   *            is querystring, path, or header; and
   *             <replaceable>{name}</replaceable>
   *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API itegrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  RequestParameters?: { [key: string]: string };

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  ResponseParameters?: { [key: string]: { [key: string]: string } };

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfig;
}

export namespace GetIntegrationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIntegrationResult): any => ({
    ...obj,
  });
}

export interface GetIntegrationResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId: string | undefined;
}

export namespace GetIntegrationResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIntegrationResponseRequest): any => ({
    ...obj,
  });
}

export interface GetIntegrationResponseResponse {
  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId?: string;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey?: string;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: { [key: string]: string };

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: { [key: string]: string };

  /**
   * <p>The template selection expressions for the integration response.</p>
   */
  TemplateSelectionExpression?: string;
}

export namespace GetIntegrationResponseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIntegrationResponseResponse): any => ({
    ...obj,
  });
}

export interface GetIntegrationResponsesRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetIntegrationResponsesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIntegrationResponsesRequest): any => ({
    ...obj,
  });
}

export interface GetIntegrationResponsesResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: IntegrationResponse[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetIntegrationResponsesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIntegrationResponsesResponse): any => ({
    ...obj,
  });
}

export interface GetIntegrationsRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetIntegrationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIntegrationsRequest): any => ({
    ...obj,
  });
}

export interface GetIntegrationsResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Integration[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetIntegrationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIntegrationsResponse): any => ({
    ...obj,
  });
}

export interface GetModelRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The model ID.</p>
   */
  ModelId: string | undefined;
}

export namespace GetModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetModelRequest): any => ({
    ...obj,
  });
}

export interface GetModelResponse {
  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The model identifier.</p>
   */
  ModelId?: string;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name?: string;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema?: string;
}

export namespace GetModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetModelResponse): any => ({
    ...obj,
  });
}

export interface GetModelsRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetModelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetModelsRequest): any => ({
    ...obj,
  });
}

export interface GetModelsResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Model[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetModelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetModelsResponse): any => ({
    ...obj,
  });
}

export interface GetModelTemplateRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The model ID.</p>
   */
  ModelId: string | undefined;
}

export namespace GetModelTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetModelTemplateRequest): any => ({
    ...obj,
  });
}

export interface GetModelTemplateResponse {
  /**
   * <p>The template value.</p>
   */
  Value?: string;
}

export namespace GetModelTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetModelTemplateResponse): any => ({
    ...obj,
  });
}

export interface GetRouteRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;
}

export namespace GetRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRouteRequest): any => ({
    ...obj,
  });
}

export interface GetRouteResult {
  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: { [key: string]: string };

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>The route ID.</p>
   */
  RouteId?: string;

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey?: string;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;
}

export namespace GetRouteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRouteResult): any => ({
    ...obj,
  });
}

export interface GetRouteResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The route response ID.</p>
   */
  RouteResponseId: string | undefined;
}

export namespace GetRouteResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRouteResponseRequest): any => ({
    ...obj,
  });
}

export interface GetRouteResponseResponse {
  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>Represents the response models of a route response.</p>
   */
  ResponseModels?: { [key: string]: string };

  /**
   * <p>Represents the response parameters of a route response.</p>
   */
  ResponseParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>Represents the identifier of a route response.</p>
   */
  RouteResponseId?: string;

  /**
   * <p>Represents the route response key of a route response.</p>
   */
  RouteResponseKey?: string;
}

export namespace GetRouteResponseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRouteResponseResponse): any => ({
    ...obj,
  });
}

export interface GetRouteResponsesRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;
}

export namespace GetRouteResponsesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRouteResponsesRequest): any => ({
    ...obj,
  });
}

export interface GetRouteResponsesResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: RouteResponse[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetRouteResponsesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRouteResponsesResponse): any => ({
    ...obj,
  });
}

export interface GetRoutesRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetRoutesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRoutesRequest): any => ({
    ...obj,
  });
}

export interface GetRoutesResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Route[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetRoutesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRoutesResponse): any => ({
    ...obj,
  });
}

export interface GetStageRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;
}

export namespace GetStageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStageRequest): any => ({
    ...obj,
  });
}

export interface GetStageResponse {
  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The timestamp when the stage was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>Default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   */
  LastDeploymentStatusMessage?: string;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   */
  RouteSettings?: { [key: string]: RouteSettings };

  /**
   * <p>The name of the stage.</p>
   */
  StageName?: string;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetStageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStageResponse): any => ({
    ...obj,
  });
}

export interface GetStagesRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetStagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStagesRequest): any => ({
    ...obj,
  });
}

export interface GetStagesResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Stage[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetStagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStagesResponse): any => ({
    ...obj,
  });
}

export interface GetTagsRequest {
  /**
   * <p>The resource ARN for the tag.</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTagsRequest): any => ({
    ...obj,
  });
}

export interface GetTagsResponse {
  /**
   * <p>Represents a collection of tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTagsResponse): any => ({
    ...obj,
  });
}

export interface GetVpcLinkRequest {
  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId: string | undefined;
}

export namespace GetVpcLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVpcLinkRequest): any => ({
    ...obj,
  });
}

export interface GetVpcLinkResponse {
  /**
   * <p>The timestamp when the VPC link was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The name of the VPC link.</p>
   */
  Name?: string;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Tags for the VPC link.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId?: string;

  /**
   * <p>The status of the VPC link.</p>
   */
  VpcLinkStatus?: VpcLinkStatus | string;

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   */
  VpcLinkStatusMessage?: string;

  /**
   * <p>The version of the VPC link.</p>
   */
  VpcLinkVersion?: VpcLinkVersion | string;
}

export namespace GetVpcLinkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVpcLinkResponse): any => ({
    ...obj,
  });
}

export interface GetVpcLinksRequest {
  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetVpcLinksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVpcLinksRequest): any => ({
    ...obj,
  });
}

export interface GetVpcLinksResponse {
  /**
   * <p>A collection of VPC links.</p>
   */
  Items?: VpcLink[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetVpcLinksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVpcLinksResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ImportApiRequest {
  /**
   * <p>Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.</p>
   */
  Basepath?: string;

  /**
   * <p>The OpenAPI definition. Supported only for HTTP APIs.</p>
   */
  Body: string | undefined;

  /**
   * <p>Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.</p>
   */
  FailOnWarnings?: boolean;
}

export namespace ImportApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportApiRequest): any => ({
    ...obj,
  });
}

export interface ImportApiResponse {
  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType?: ProtocolType | string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];
}

export namespace ImportApiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportApiResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ReimportApiRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.</p>
   */
  Basepath?: string;

  /**
   * <p>The OpenAPI definition. Supported only for HTTP APIs.</p>
   */
  Body: string | undefined;

  /**
   * <p>Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.</p>
   */
  FailOnWarnings?: boolean;
}

export namespace ReimportApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReimportApiRequest): any => ({
    ...obj,
  });
}

export interface ReimportApiResponse {
  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType?: ProtocolType | string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];
}

export namespace ReimportApiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReimportApiResponse): any => ({
    ...obj,
  });
}

export interface ResetAuthorizersCacheRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;
}

export namespace ResetAuthorizersCacheRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetAuthorizersCacheRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new Tag resource to represent a tag.</p>
 */
export interface TagResourceRequest {
  /**
   * <p>The resource ARN for the tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
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
   * <p>The resource ARN for the tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The Tag keys to delete</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Updates an Api.</p>
 */
export interface UpdateApiRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, don't specify this parameter. Currently, this property is not used for HTTP integrations. If provided, this value replaces the credentials associated with the quick create integration. Supported only for HTTP APIs.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>This property is part of quick create. If not specified, the route created using quick create is kept. Otherwise, this value replaces the route key of the quick create route. Additional routes may still be added after the API is updated. Supported only for HTTP APIs.</p>
   */
  RouteKey?: string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>This property is part of quick create. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. The value provided updates the integration URI and integration type. You can update a quick-created target, but you can't remove it from an API. Supported only for HTTP APIs.</p>
   */
  Target?: string;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;
}

export namespace UpdateApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApiRequest): any => ({
    ...obj,
  });
}

export interface UpdateApiResponse {
  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType?: ProtocolType | string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];
}

export namespace UpdateApiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApiResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Updates an ApiMapping.</p>
 */
export interface UpdateApiMappingRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId: string | undefined;

  /**
   * <p>The API mapping key.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The API stage.</p>
   */
  Stage?: string;
}

export namespace UpdateApiMappingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApiMappingRequest): any => ({
    ...obj,
  });
}

export interface UpdateApiMappingResponse {
  /**
   * <p>The API identifier.</p>
   */
  ApiId?: string;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId?: string;

  /**
   * <p>The API mapping key.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The API stage.</p>
   */
  Stage?: string;
}

export namespace UpdateApiMappingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApiMappingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Updates an Authorizer.</p>
 */
export interface UpdateAuthorizerRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId: string | undefined;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   */
  AuthorizerPayloadFormatVersion?: string;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   */
  EnableSimpleResponses?: boolean;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   */
  IdentitySource?: string[];

  /**
   * <p>This parameter is not used.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name?: string;
}

export namespace UpdateAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface UpdateAuthorizerResponse {
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   */
  AuthorizerPayloadFormatVersion?: string;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   */
  EnableSimpleResponses?: boolean;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   */
  IdentitySource?: string[];

  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name?: string;
}

export namespace UpdateAuthorizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAuthorizerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Updates a Deployment.</p>
 */
export interface UpdateDeploymentRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The deployment ID.</p>
   */
  DeploymentId: string | undefined;

  /**
   * <p>The description for the deployment resource.</p>
   */
  Description?: string;
}

export namespace UpdateDeploymentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeploymentRequest): any => ({
    ...obj,
  });
}

export interface UpdateDeploymentResponse {
  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   */
  AutoDeployed?: boolean;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The identifier for the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   */
  DeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   */
  DeploymentStatusMessage?: string;

  /**
   * <p>The description for the deployment.</p>
   */
  Description?: string;
}

export namespace UpdateDeploymentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeploymentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Updates a DomainName.</p>
 */
export interface UpdateDomainNameRequest {
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   */
  MutualTlsAuthentication?: MutualTlsAuthenticationInput;
}

export namespace UpdateDomainNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainNameRequest): any => ({
    ...obj,
  });
}

export interface UpdateDomainNameResponse {
  /**
   * <p>The API mapping selection expression.</p>
   */
  ApiMappingSelectionExpression?: string;

  /**
   * <p>The name of the DomainName resource.</p>
   */
  DomainName?: string;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   */
  MutualTlsAuthentication?: MutualTlsAuthentication;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateDomainNameResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainNameResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Updates an Integration.</p>
 */
export interface UpdateIntegrationRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>The description of the integration</p>
   */
  Description?: string;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   */
  IntegrationSubtype?: string;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration. For HTTP API private integrations, use an HTTP_PROXY integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
   *           , where
   *             <replaceable>{location}</replaceable>
   *            is querystring, path, or header; and
   *             <replaceable>{name}</replaceable>
   *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.">Transforming API requests and responses</a>.</p>
   */
  RequestParameters?: { [key: string]: string };

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  ResponseParameters?: { [key: string]: { [key: string]: string } };

  /**
   * <p>The template selection expression for the integration.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfigInput;
}

export namespace UpdateIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIntegrationRequest): any => ({
    ...obj,
  });
}

export interface UpdateIntegrationResult {
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>Represents the description of an integration.</p>
   */
  Description?: string;

  /**
   * <p>Represents the identifier of an integration.</p>
   */
  IntegrationId?: string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   */
  IntegrationResponseSelectionExpression?: string;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   */
  IntegrationSubtype?: string;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
   *           , where
   *             <replaceable>{location}</replaceable>
   *            is querystring, path, or header; and
   *             <replaceable>{name}</replaceable>
   *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API itegrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  RequestParameters?: { [key: string]: string };

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  ResponseParameters?: { [key: string]: { [key: string]: string } };

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfig;
}

export namespace UpdateIntegrationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIntegrationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Updates an IntegrationResponses.</p>
 */
export interface UpdateIntegrationResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId: string | undefined;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey?: string;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.<replaceable>{name}</replaceable>
   *                , where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.<replaceable>{name}</replaceable>
   *                 or integration.response.body.<replaceable>{JSON-expression}</replaceable>
   *                , where
   *                   <replaceable>{name}</replaceable>
   *                 is a valid and unique response header name and
   *                   <replaceable>{JSON-expression}</replaceable>
   *                 is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: { [key: string]: string };

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: { [key: string]: string };

  /**
   * <p>The template selection expression for the integration response. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;
}

export namespace UpdateIntegrationResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIntegrationResponseRequest): any => ({
    ...obj,
  });
}

export interface UpdateIntegrationResponseResponse {
  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId?: string;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey?: string;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: { [key: string]: string };

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: { [key: string]: string };

  /**
   * <p>The template selection expressions for the integration response.</p>
   */
  TemplateSelectionExpression?: string;
}

export namespace UpdateIntegrationResponseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIntegrationResponseResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Updates a Model.</p>
 */
export interface UpdateModelRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The model ID.</p>
   */
  ModelId: string | undefined;

  /**
   * <p>The name of the model.</p>
   */
  Name?: string;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema?: string;
}

export namespace UpdateModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateModelRequest): any => ({
    ...obj,
  });
}

export interface UpdateModelResponse {
  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The model identifier.</p>
   */
  ModelId?: string;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name?: string;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema?: string;
}

export namespace UpdateModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateModelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Updates a Route.</p>
 */
export interface UpdateRouteRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies whether an API key is required for the route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>The authorization scopes supported by this route.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: { [key: string]: string };

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey?: string;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;
}

export namespace UpdateRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRouteRequest): any => ({
    ...obj,
  });
}

export interface UpdateRouteResult {
  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: { [key: string]: string };

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>The route ID.</p>
   */
  RouteId?: string;

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey?: string;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;
}

export namespace UpdateRouteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRouteResult): any => ({
    ...obj,
  });
}

/**
 * <p>Updates a RouteResponse.</p>
 */
export interface UpdateRouteResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The model selection expression for the route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The response models for the route response.</p>
   */
  ResponseModels?: { [key: string]: string };

  /**
   * <p>The route response parameters.</p>
   */
  ResponseParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The route response ID.</p>
   */
  RouteResponseId: string | undefined;

  /**
   * <p>The route response key.</p>
   */
  RouteResponseKey?: string;
}

export namespace UpdateRouteResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRouteResponseRequest): any => ({
    ...obj,
  });
}

export interface UpdateRouteResponseResponse {
  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>Represents the response models of a route response.</p>
   */
  ResponseModels?: { [key: string]: string };

  /**
   * <p>Represents the response parameters of a route response.</p>
   */
  ResponseParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>Represents the identifier of a route response.</p>
   */
  RouteResponseId?: string;

  /**
   * <p>Represents the route response key of a route response.</p>
   */
  RouteResponseKey?: string;
}

export namespace UpdateRouteResponseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRouteResponseResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Updates a Stage.</p>
 */
export interface UpdateStageRequest {
  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The identifier of a client certificate for a Stage.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The description for the API stage.</p>
   */
  Description?: string;

  /**
   * <p>Route settings for the stage.</p>
   */
  RouteSettings?: { [key: string]: RouteSettings };

  /**
   * <p>The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;

  /**
   * <p>A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: { [key: string]: string };
}

export namespace UpdateStageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStageRequest): any => ({
    ...obj,
  });
}

export interface UpdateStageResponse {
  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The timestamp when the stage was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>Default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   */
  LastDeploymentStatusMessage?: string;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   */
  RouteSettings?: { [key: string]: RouteSettings };

  /**
   * <p>The name of the stage.</p>
   */
  StageName?: string;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateStageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Updates a VPC link.</p>
 */
export interface UpdateVpcLinkRequest {
  /**
   * <p>The name of the VPC link.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId: string | undefined;
}

export namespace UpdateVpcLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVpcLinkRequest): any => ({
    ...obj,
  });
}

export interface UpdateVpcLinkResponse {
  /**
   * <p>The timestamp when the VPC link was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The name of the VPC link.</p>
   */
  Name?: string;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Tags for the VPC link.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId?: string;

  /**
   * <p>The status of the VPC link.</p>
   */
  VpcLinkStatus?: VpcLinkStatus | string;

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   */
  VpcLinkStatusMessage?: string;

  /**
   * <p>The version of the VPC link.</p>
   */
  VpcLinkVersion?: VpcLinkVersion | string;
}

export namespace UpdateVpcLinkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVpcLinkResponse): any => ({
    ...obj,
  });
}
