import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
}

/**
 * <p>Settings for logging access in a stage.</p>
 */
export interface AccessLogSettings {
  __type?: "AccessLogSettings";
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
  export const filterSensitiveLog = (obj: AccessLogSettings): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessLogSettings => __isa(o, "AccessLogSettings");
}

/**
 * <p>Represents an API.</p>
 */
export interface Api {
  __type?: "Api";
  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The name of the API.</p>
   */
  Name: string | undefined;

  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression: string | undefined;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType: ProtocolType | string | undefined;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;
}

export namespace Api {
  export const filterSensitiveLog = (obj: Api): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Api => __isa(o, "Api");
}

/**
 * <p>Represents an API mapping.</p>
 */
export interface ApiMapping {
  __type?: "ApiMapping";
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
  export const filterSensitiveLog = (obj: ApiMapping): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ApiMapping => __isa(o, "ApiMapping");
}

export enum AuthorizationType {
  AWS_IAM = "AWS_IAM",
  CUSTOM = "CUSTOM",
  JWT = "JWT",
  NONE = "NONE",
}

/**
 * <p>Represents an authorizer.</p>
 */
export interface Authorizer {
  __type?: "Authorizer";
  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). ForREQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>Authorizer caching is not currently supported. Don't specify this value for authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. Currently, the identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name. These parameters will be used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example "$request.header.Authorization".</p>
   */
  IdentitySource?: string[];

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
  export const filterSensitiveLog = (obj: Authorizer): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Authorizer => __isa(o, "Authorizer");
}

export enum AuthorizerType {
  JWT = "JWT",
  REQUEST = "REQUEST",
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
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BadRequestException => __isa(o, "BadRequestException");
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
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConflictException => __isa(o, "ConflictException");
}

export enum ConnectionType {
  INTERNET = "INTERNET",
  VPC_LINK = "VPC_LINK",
}

export enum ContentHandlingStrategy {
  CONVERT_TO_BINARY = "CONVERT_TO_BINARY",
  CONVERT_TO_TEXT = "CONVERT_TO_TEXT",
}

/**
 * <p>Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.</p>
 */
export interface Cors {
  __type?: "Cors";
  /**
   * <p>Represents a collection of allowed HTTP methods. Supported only for HTTP APIs.</p>
   */
  AllowMethods?: string[];

  /**
   * <p>The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs.</p>
   */
  MaxAge?: number;

  /**
   * <p>Represents a collection of allowed origins. Supported only for HTTP APIs.</p>
   */
  AllowOrigins?: string[];

  /**
   * <p>Represents a collection of exposed headers. Supported only for HTTP APIs.</p>
   */
  ExposeHeaders?: string[];

  /**
   * <p>Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs.</p>
   */
  AllowCredentials?: boolean;

  /**
   * <p>Represents a collection of allowed headers. Supported only for HTTP APIs.</p>
   */
  AllowHeaders?: string[];
}

export namespace Cors {
  export const filterSensitiveLog = (obj: Cors): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Cors => __isa(o, "Cors");
}

/**
 * <p>Creates a new ApiMapping resource to represent an API mapping.</p>
 */
export interface CreateApiMappingRequest {
  __type?: "CreateApiMappingRequest";
  /**
   * The API mapping key.
   */
  ApiMappingKey?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The API stage.</p>
   */
  Stage: string | undefined;
}

export namespace CreateApiMappingRequest {
  export const filterSensitiveLog = (obj: CreateApiMappingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateApiMappingRequest => __isa(o, "CreateApiMappingRequest");
}

export interface CreateApiMappingResponse {
  __type?: "CreateApiMappingResponse";
  /**
   * <p>The API identifier.</p>
   */
  ApiId?: string;

  /**
   * <p>The API stage.</p>
   */
  Stage?: string;

  /**
   * <p>The API mapping key.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId?: string;
}

export namespace CreateApiMappingResponse {
  export const filterSensitiveLog = (obj: CreateApiMappingResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateApiMappingResponse => __isa(o, "CreateApiMappingResponse");
}

/**
 * <p>Creates a new Api resource to represent an API.</p>
 */
export interface CreateApiRequest {
  __type?: "CreateApiRequest";
  /**
   * <p>A CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null. Currently, this property is not used for HTTP integrations. Supported only for HTTP APIs.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>This property is part of quick create. If you don't specify a routeKey, a default route of $default is created. The $default route acts as a catch-all for any request made to your API, for a particular stage. The $default route key can't be modified. You can add routes after creating the API, and you can update the route keys of additional routes. Supported only for HTTP APIs.</p>
   */
  RouteKey?: string;

  /**
   * <p>This property is part of quick create. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. Supported only for HTTP APIs.</p>
   */
  Target?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name of the API.</p>
   */
  Name: string | undefined;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType: ProtocolType | string | undefined;
}

export namespace CreateApiRequest {
  export const filterSensitiveLog = (obj: CreateApiRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateApiRequest => __isa(o, "CreateApiRequest");
}

export interface CreateApiResponse {
  __type?: "CreateApiResponse";
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
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;
}

export namespace CreateApiResponse {
  export const filterSensitiveLog = (obj: CreateApiResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateApiResponse => __isa(o, "CreateApiResponse");
}

/**
 * <p>Creates a new Authorizer resource to represent an authorizer.</p>
 */
export interface CreateAuthorizerRequest {
  __type?: "CreateAuthorizerRequest";
  /**
   * <p>The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.</p>
   */
  AuthorizerType: AuthorizerType | string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>This parameter is not used.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. Currently, the identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name. These parameters will be used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT )from inbound requests. Currently only header-based and query parameter-based selections are supported, for example "$request.header.Authorization".</p>
   */
  IdentitySource: string[] | undefined;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name: string | undefined;

  /**
   * <p>Authorizer caching is not currently supported. Don't specify this value for authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;
}

export namespace CreateAuthorizerRequest {
  export const filterSensitiveLog = (obj: CreateAuthorizerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAuthorizerRequest => __isa(o, "CreateAuthorizerRequest");
}

export interface CreateAuthorizerResponse {
  __type?: "CreateAuthorizerResponse";
  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>Authorizer caching is not currently supported. Don't specify this value for authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). ForREQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name?: string;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. Currently, the identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name. These parameters will be used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example "$request.header.Authorization".</p>
   */
  IdentitySource?: string[];

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.</p>
   */
  AuthorizerType?: AuthorizerType | string;
}

export namespace CreateAuthorizerResponse {
  export const filterSensitiveLog = (obj: CreateAuthorizerResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAuthorizerResponse => __isa(o, "CreateAuthorizerResponse");
}

/**
 * <p>Creates a new Deployment resource to represent a deployment.</p>
 */
export interface CreateDeploymentRequest {
  __type?: "CreateDeploymentRequest";
  /**
   * <p>The name of the Stage resource for the Deployment resource to create.</p>
   */
  StageName?: string;

  /**
   * <p>The description for the deployment resource.</p>
   */
  Description?: string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace CreateDeploymentRequest {
  export const filterSensitiveLog = (obj: CreateDeploymentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDeploymentRequest => __isa(o, "CreateDeploymentRequest");
}

export interface CreateDeploymentResponse {
  __type?: "CreateDeploymentResponse";
  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   */
  AutoDeployed?: boolean;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   */
  DeploymentStatusMessage?: string;

  /**
   * <p>The identifier for the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   */
  DeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>The description for the deployment.</p>
   */
  Description?: string;
}

export namespace CreateDeploymentResponse {
  export const filterSensitiveLog = (obj: CreateDeploymentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDeploymentResponse => __isa(o, "CreateDeploymentResponse");
}

/**
 * <p>Creates a new DomainName resource to represent a domain name.</p>
 */
export interface CreateDomainNameRequest {
  __type?: "CreateDomainNameRequest";
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDomainNameRequest {
  export const filterSensitiveLog = (obj: CreateDomainNameRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDomainNameRequest => __isa(o, "CreateDomainNameRequest");
}

export interface CreateDomainNameResponse {
  __type?: "CreateDomainNameResponse";
  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The name of the DomainName resource.</p>
   */
  DomainName?: string;

  /**
   * <p>The API mapping selection expression.</p>
   */
  ApiMappingSelectionExpression?: string;
}

export namespace CreateDomainNameResponse {
  export const filterSensitiveLog = (obj: CreateDomainNameResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDomainNameResponse => __isa(o, "CreateDomainNameResponse");
}

/**
 * <p>Creates a new Integration resource to represent an integration.</p>
 */
export interface CreateIntegrationRequest {
  __type?: "CreateIntegrationRequest";
  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>The description of the integration.</p>
   */
  Description?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with the Lambda function-invoking action with the client request passed through as-is. This integration is also referred to as Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration. For HTTP API private integrations, use an HTTP_PROXY integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType: IntegrationType | string | undefined;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfigInput;

  /**
   * <p>The template selection expression for the integration.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>A key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
   *                , where
   *                   <replaceable>{location}</replaceable>
   *                 is querystring, path, or header; and
   *                   <replaceable>{name}</replaceable>
   *                 must be a valid and unique method request parameter name. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: string };
}

export namespace CreateIntegrationRequest {
  export const filterSensitiveLog = (obj: CreateIntegrationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateIntegrationRequest => __isa(o, "CreateIntegrationRequest");
}

/**
 * <p>Creates a new IntegrationResponse resource to represent an integration response.</p>
 */
export interface CreateIntegrationResponseRequest {
  __type?: "CreateIntegrationResponseRequest";
  /**
   * <p>The template selection expression for the integration response. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: { [key: string]: string };

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey: string | undefined;

  /**
   * <p>Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where {name} is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where {name} is a valid and unique response header name and {JSON-expression} is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: { [key: string]: string };
}

export namespace CreateIntegrationResponseRequest {
  export const filterSensitiveLog = (obj: CreateIntegrationResponseRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateIntegrationResponseRequest => __isa(o, "CreateIntegrationResponseRequest");
}

export interface CreateIntegrationResponseResponse {
  __type?: "CreateIntegrationResponseResponse";
  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey?: string;

  /**
   * <p>The template selection expressions for the integration response.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: { [key: string]: string };

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId?: string;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: { [key: string]: string };

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;
}

export namespace CreateIntegrationResponseResponse {
  export const filterSensitiveLog = (obj: CreateIntegrationResponseResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateIntegrationResponseResponse => __isa(o, "CreateIntegrationResponseResponse");
}

export interface CreateIntegrationResult {
  __type?: "CreateIntegrationResult";
  /**
   * <p>Represents the identifier of an integration.</p>
   */
  IntegrationId?: string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   */
  IntegrationResponseSelectionExpression?: string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with the Lambda function-invoking action with the client request passed through as-is. This integration is also referred to as Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfig;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>Represents the description of an integration.</p>
   */
  Description?: string;

  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>A key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
   *                , where
   *                   <replaceable>{location}</replaceable>
   *                 is querystring, path, or header; and
   *                   <replaceable>{name}</replaceable>
   *                 must be a valid and unique method request parameter name. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: string };

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;
}

export namespace CreateIntegrationResult {
  export const filterSensitiveLog = (obj: CreateIntegrationResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateIntegrationResult => __isa(o, "CreateIntegrationResult");
}

/**
 * <p>Creates a new Model.</p>
 */
export interface CreateModelRequest {
  __type?: "CreateModelRequest";
  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema: string | undefined;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;
}

export namespace CreateModelRequest {
  export const filterSensitiveLog = (obj: CreateModelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateModelRequest => __isa(o, "CreateModelRequest");
}

export interface CreateModelResponse {
  __type?: "CreateModelResponse";
  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name?: string;

  /**
   * <p>The model identifier.</p>
   */
  ModelId?: string;

  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema?: string;
}

export namespace CreateModelResponse {
  export const filterSensitiveLog = (obj: CreateModelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateModelResponse => __isa(o, "CreateModelResponse");
}

/**
 * <p>Creates a new Route resource to represent a route.</p>
 */
export interface CreateRouteRequest {
  __type?: "CreateRouteRequest";
  /**
   * <p>The route key for the route.</p>
   */
  RouteKey: string | undefined;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>Specifies whether an API key is required for the route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>The authorization scopes supported by this route.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: { [key: string]: string };
}

export namespace CreateRouteRequest {
  export const filterSensitiveLog = (obj: CreateRouteRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRouteRequest => __isa(o, "CreateRouteRequest");
}

/**
 * <p>Creates a new RouteResponse resource to represent a route response.</p>
 */
export interface CreateRouteResponseRequest {
  __type?: "CreateRouteResponseRequest";
  /**
   * <p>The route response parameters.</p>
   */
  ResponseParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>The route response key.</p>
   */
  RouteResponseKey: string | undefined;

  /**
   * <p>The response models for the route response.</p>
   */
  ResponseModels?: { [key: string]: string };

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The model selection expression for the route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;
}

export namespace CreateRouteResponseRequest {
  export const filterSensitiveLog = (obj: CreateRouteResponseRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRouteResponseRequest => __isa(o, "CreateRouteResponseRequest");
}

export interface CreateRouteResponseResponse {
  __type?: "CreateRouteResponseResponse";
  /**
   * <p>Represents the response models of a route response.</p>
   */
  ResponseModels?: { [key: string]: string };

  /**
   * <p>Represents the identifier of a route response.</p>
   */
  RouteResponseId?: string;

  /**
   * <p>Represents the response parameters of a route response.</p>
   */
  ResponseParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>Represents the route response key of a route response.</p>
   */
  RouteResponseKey?: string;

  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;
}

export namespace CreateRouteResponseResponse {
  export const filterSensitiveLog = (obj: CreateRouteResponseResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRouteResponseResponse => __isa(o, "CreateRouteResponseResponse");
}

export interface CreateRouteResult {
  __type?: "CreateRouteResult";
  /**
   * <p>The target for the route.</p>
   */
  Target?: string;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The route ID.</p>
   */
  RouteId?: string;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: { [key: string]: string };

  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey?: string;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens.</p>
   */
  AuthorizationType?: AuthorizationType | string;
}

export namespace CreateRouteResult {
  export const filterSensitiveLog = (obj: CreateRouteResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRouteResult => __isa(o, "CreateRouteResult");
}

/**
 * <p>Creates a new Stage resource to represent a stage.</p>
 */
export interface CreateStageRequest {
  __type?: "CreateStageRequest";
  /**
   * <p>A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The description for the API stage.</p>
   */
  Description?: string;

  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * <p>The deployment identifier of the API stage.</p>
   */
  DeploymentId?: string;

  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   */
  RouteSettings?: { [key: string]: RouteSettings };

  /**
   * <p>The default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   */
  ClientCertificateId?: string;
}

export namespace CreateStageRequest {
  export const filterSensitiveLog = (obj: CreateStageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateStageRequest => __isa(o, "CreateStageRequest");
}

export interface CreateStageResponse {
  __type?: "CreateStageResponse";
  /**
   * <p>Route settings for the stage, by routeKey.</p>
   */
  RouteSettings?: { [key: string]: RouteSettings };

  /**
   * <p>The timestamp when the stage was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   */
  LastDeploymentStatusMessage?: string;

  /**
   * <p>Default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>The name of the stage.</p>
   */
  StageName?: string;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;
}

export namespace CreateStageResponse {
  export const filterSensitiveLog = (obj: CreateStageResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateStageResponse => __isa(o, "CreateStageResponse");
}

/**
 * <p>Creates a VPC link</p>
 */
export interface CreateVpcLinkRequest {
  __type?: "CreateVpcLinkRequest";
  /**
   * <p>The name of the VPC link.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of tags.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace CreateVpcLinkRequest {
  export const filterSensitiveLog = (obj: CreateVpcLinkRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateVpcLinkRequest => __isa(o, "CreateVpcLinkRequest");
}

export interface CreateVpcLinkResponse {
  __type?: "CreateVpcLinkResponse";
  /**
   * <p>The status of the VPC link.</p>
   */
  VpcLinkStatus?: VpcLinkStatus | string;

  /**
   * <p>The version of the VPC link.</p>
   */
  VpcLinkVersion?: VpcLinkVersion | string;

  /**
   * <p>The name of the VPC link.</p>
   */
  Name?: string;

  /**
   * <p>The timestamp when the VPC link was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId?: string;

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Tags for the VPC link.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   */
  VpcLinkStatusMessage?: string;
}

export namespace CreateVpcLinkResponse {
  export const filterSensitiveLog = (obj: CreateVpcLinkResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateVpcLinkResponse => __isa(o, "CreateVpcLinkResponse");
}

export interface DeleteAccessLogSettingsRequest {
  __type?: "DeleteAccessLogSettingsRequest";
  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace DeleteAccessLogSettingsRequest {
  export const filterSensitiveLog = (obj: DeleteAccessLogSettingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAccessLogSettingsRequest => __isa(o, "DeleteAccessLogSettingsRequest");
}

export interface DeleteApiMappingRequest {
  __type?: "DeleteApiMappingRequest";
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId: string | undefined;
}

export namespace DeleteApiMappingRequest {
  export const filterSensitiveLog = (obj: DeleteApiMappingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteApiMappingRequest => __isa(o, "DeleteApiMappingRequest");
}

export interface DeleteApiRequest {
  __type?: "DeleteApiRequest";
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace DeleteApiRequest {
  export const filterSensitiveLog = (obj: DeleteApiRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteApiRequest => __isa(o, "DeleteApiRequest");
}

export interface DeleteAuthorizerRequest {
  __type?: "DeleteAuthorizerRequest";
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
  export const filterSensitiveLog = (obj: DeleteAuthorizerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAuthorizerRequest => __isa(o, "DeleteAuthorizerRequest");
}

export interface DeleteCorsConfigurationRequest {
  __type?: "DeleteCorsConfigurationRequest";
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace DeleteCorsConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteCorsConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteCorsConfigurationRequest => __isa(o, "DeleteCorsConfigurationRequest");
}

export interface DeleteDeploymentRequest {
  __type?: "DeleteDeploymentRequest";
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
  export const filterSensitiveLog = (obj: DeleteDeploymentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDeploymentRequest => __isa(o, "DeleteDeploymentRequest");
}

export interface DeleteDomainNameRequest {
  __type?: "DeleteDomainNameRequest";
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;
}

export namespace DeleteDomainNameRequest {
  export const filterSensitiveLog = (obj: DeleteDomainNameRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDomainNameRequest => __isa(o, "DeleteDomainNameRequest");
}

export interface DeleteIntegrationRequest {
  __type?: "DeleteIntegrationRequest";
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
  export const filterSensitiveLog = (obj: DeleteIntegrationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteIntegrationRequest => __isa(o, "DeleteIntegrationRequest");
}

export interface DeleteIntegrationResponseRequest {
  __type?: "DeleteIntegrationResponseRequest";
  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace DeleteIntegrationResponseRequest {
  export const filterSensitiveLog = (obj: DeleteIntegrationResponseRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteIntegrationResponseRequest => __isa(o, "DeleteIntegrationResponseRequest");
}

export interface DeleteModelRequest {
  __type?: "DeleteModelRequest";
  /**
   * <p>The model ID.</p>
   */
  ModelId: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace DeleteModelRequest {
  export const filterSensitiveLog = (obj: DeleteModelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteModelRequest => __isa(o, "DeleteModelRequest");
}

export interface DeleteRouteRequest {
  __type?: "DeleteRouteRequest";
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
  export const filterSensitiveLog = (obj: DeleteRouteRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRouteRequest => __isa(o, "DeleteRouteRequest");
}

export interface DeleteRouteRequestParameterRequest {
  __type?: "DeleteRouteRequestParameterRequest";
  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The route request parameter key.</p>
   */
  RequestParameterKey: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace DeleteRouteRequestParameterRequest {
  export const filterSensitiveLog = (obj: DeleteRouteRequestParameterRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRouteRequestParameterRequest =>
    __isa(o, "DeleteRouteRequestParameterRequest");
}

export interface DeleteRouteResponseRequest {
  __type?: "DeleteRouteResponseRequest";
  /**
   * <p>The route response ID.</p>
   */
  RouteResponseId: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;
}

export namespace DeleteRouteResponseRequest {
  export const filterSensitiveLog = (obj: DeleteRouteResponseRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRouteResponseRequest => __isa(o, "DeleteRouteResponseRequest");
}

export interface DeleteRouteSettingsRequest {
  __type?: "DeleteRouteSettingsRequest";
  /**
   * <p>The route key.</p>
   */
  RouteKey: string | undefined;

  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace DeleteRouteSettingsRequest {
  export const filterSensitiveLog = (obj: DeleteRouteSettingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRouteSettingsRequest => __isa(o, "DeleteRouteSettingsRequest");
}

export interface DeleteStageRequest {
  __type?: "DeleteStageRequest";
  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace DeleteStageRequest {
  export const filterSensitiveLog = (obj: DeleteStageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteStageRequest => __isa(o, "DeleteStageRequest");
}

export interface DeleteVpcLinkRequest {
  __type?: "DeleteVpcLinkRequest";
  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId: string | undefined;
}

export namespace DeleteVpcLinkRequest {
  export const filterSensitiveLog = (obj: DeleteVpcLinkRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteVpcLinkRequest => __isa(o, "DeleteVpcLinkRequest");
}

export interface DeleteVpcLinkResponse {
  __type?: "DeleteVpcLinkResponse";
}

export namespace DeleteVpcLinkResponse {
  export const filterSensitiveLog = (obj: DeleteVpcLinkResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteVpcLinkResponse => __isa(o, "DeleteVpcLinkResponse");
}

/**
 * <p>An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet.</p>
 */
export interface Deployment {
  __type?: "Deployment";
  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   */
  DeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   */
  AutoDeployed?: boolean;

  /**
   * <p>The identifier for the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   */
  DeploymentStatusMessage?: string;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The description for the deployment.</p>
   */
  Description?: string;
}

export namespace Deployment {
  export const filterSensitiveLog = (obj: Deployment): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Deployment => __isa(o, "Deployment");
}

export enum DeploymentStatus {
  DEPLOYED = "DEPLOYED",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

/**
 * <p>Represents a domain name.</p>
 */
export interface DomainName {
  __type?: "DomainName";
  /**
   * <p>The API mapping selection expression.</p>
   */
  ApiMappingSelectionExpression?: string;

  /**
   * <p>The name of the DomainName resource.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];
}

export namespace DomainName {
  export const filterSensitiveLog = (obj: DomainName): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DomainName => __isa(o, "DomainName");
}

/**
 * <p>The domain name configuration.</p>
 */
export interface DomainNameConfiguration {
  __type?: "DomainNameConfiguration";
  /**
   * <p>A domain name for the API.</p>
   */
  ApiGatewayDomainName?: string;

  /**
   * <p>The Amazon Route 53 Hosted Zone ID of the endpoint.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>The endpoint type.</p>
   */
  EndpointType?: EndpointType | string;

  /**
   * <p>The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2.</p>
   */
  SecurityPolicy?: SecurityPolicy | string;

  /**
   * <p>The timestamp when the certificate that was used by edge-optimized endpoint for this domain name was uploaded.</p>
   */
  CertificateUploadDate?: Date;

  /**
   * <p>The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.</p>
   */
  CertificateName?: string;

  /**
   * <p>An optional text message containing detailed information about status of the domain name migration.</p>
   */
  DomainNameStatusMessage?: string;

  /**
   * <p>The status of the domain name migration. The valid values are AVAILABLE and UPDATING. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated.</p>
   */
  DomainNameStatus?: DomainNameStatus | string;

  /**
   * <p>An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>
   */
  CertificateArn?: string;
}

export namespace DomainNameConfiguration {
  export const filterSensitiveLog = (obj: DomainNameConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DomainNameConfiguration => __isa(o, "DomainNameConfiguration");
}

export enum DomainNameStatus {
  AVAILABLE = "AVAILABLE",
  UPDATING = "UPDATING",
}

export enum EndpointType {
  EDGE = "EDGE",
  REGIONAL = "REGIONAL",
}

export interface ExportApiRequest {
  __type?: "ExportApiRequest";
  /**
   * <p>The version of the API Gateway export algorithm. API Gateway uses the latest version by default. Currently, the only supported version is 1.0.</p>
   */
  ExportVersion?: string;

  /**
   * <p>The output type of the exported definition file. Valid values are JSON and YAML.</p>
   */
  OutputType: string | undefined;

  /**
   * <p>The name of the API stage to export. If you don't specify this property, a representation of the latest API configuration is exported.</p>
   */
  StageName?: string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies whether to include <a href="https://docs.aws.amazon.com//apigateway/latest/developerguide/api-gateway-swagger-extensions.html">API Gateway extensions</a> in the exported API definition. API Gateway extensions are included by default.</p>
   */
  IncludeExtensions?: boolean;

  /**
   * <p>The version of the API specification to use. OAS30, for OpenAPI 3.0, is the only supported value.</p>
   */
  Specification: string | undefined;
}

export namespace ExportApiRequest {
  export const filterSensitiveLog = (obj: ExportApiRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportApiRequest => __isa(o, "ExportApiRequest");
}

export interface ExportApiResponse {
  __type?: "ExportApiResponse";
  /**
   * <p>Represents an exported definition of an API in a particular output format, for example, YAML. The API is serialized to the requested specification, for example, OpenAPI 3.0.</p>
   */
  body?: Uint8Array;
}

export namespace ExportApiResponse {
  export const filterSensitiveLog = (obj: ExportApiResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportApiResponse => __isa(o, "ExportApiResponse");
}

export interface GetApiMappingRequest {
  __type?: "GetApiMappingRequest";
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId: string | undefined;
}

export namespace GetApiMappingRequest {
  export const filterSensitiveLog = (obj: GetApiMappingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApiMappingRequest => __isa(o, "GetApiMappingRequest");
}

export interface GetApiMappingResponse {
  __type?: "GetApiMappingResponse";
  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId?: string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId?: string;

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
  export const filterSensitiveLog = (obj: GetApiMappingResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApiMappingResponse => __isa(o, "GetApiMappingResponse");
}

export interface GetApiMappingsRequest {
  __type?: "GetApiMappingsRequest";
  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;
}

export namespace GetApiMappingsRequest {
  export const filterSensitiveLog = (obj: GetApiMappingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApiMappingsRequest => __isa(o, "GetApiMappingsRequest");
}

export interface GetApiMappingsResponse {
  __type?: "GetApiMappingsResponse";
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
  export const filterSensitiveLog = (obj: GetApiMappingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApiMappingsResponse => __isa(o, "GetApiMappingsResponse");
}

export interface GetApiRequest {
  __type?: "GetApiRequest";
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace GetApiRequest {
  export const filterSensitiveLog = (obj: GetApiRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApiRequest => __isa(o, "GetApiRequest");
}

export interface GetApiResponse {
  __type?: "GetApiResponse";
  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType?: ProtocolType | string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;
}

export namespace GetApiResponse {
  export const filterSensitiveLog = (obj: GetApiResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApiResponse => __isa(o, "GetApiResponse");
}

export interface GetApisRequest {
  __type?: "GetApisRequest";
  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;
}

export namespace GetApisRequest {
  export const filterSensitiveLog = (obj: GetApisRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApisRequest => __isa(o, "GetApisRequest");
}

export interface GetApisResponse {
  __type?: "GetApisResponse";
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
  export const filterSensitiveLog = (obj: GetApisResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApisResponse => __isa(o, "GetApisResponse");
}

export interface GetAuthorizerRequest {
  __type?: "GetAuthorizerRequest";
  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace GetAuthorizerRequest {
  export const filterSensitiveLog = (obj: GetAuthorizerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAuthorizerRequest => __isa(o, "GetAuthorizerRequest");
}

export interface GetAuthorizerResponse {
  __type?: "GetAuthorizerResponse";
  /**
   * <p>The name of the authorizer.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). ForREQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>Authorizer caching is not currently supported. Don't specify this value for authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. Currently, the identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name. These parameters will be used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example "$request.header.Authorization".</p>
   */
  IdentitySource?: string[];

  /**
   * <p>The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;
}

export namespace GetAuthorizerResponse {
  export const filterSensitiveLog = (obj: GetAuthorizerResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAuthorizerResponse => __isa(o, "GetAuthorizerResponse");
}

export interface GetAuthorizersRequest {
  __type?: "GetAuthorizersRequest";
  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace GetAuthorizersRequest {
  export const filterSensitiveLog = (obj: GetAuthorizersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAuthorizersRequest => __isa(o, "GetAuthorizersRequest");
}

export interface GetAuthorizersResponse {
  __type?: "GetAuthorizersResponse";
  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Authorizer[];
}

export namespace GetAuthorizersResponse {
  export const filterSensitiveLog = (obj: GetAuthorizersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAuthorizersResponse => __isa(o, "GetAuthorizersResponse");
}

export interface GetDeploymentRequest {
  __type?: "GetDeploymentRequest";
  /**
   * <p>The deployment ID.</p>
   */
  DeploymentId: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace GetDeploymentRequest {
  export const filterSensitiveLog = (obj: GetDeploymentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDeploymentRequest => __isa(o, "GetDeploymentRequest");
}

export interface GetDeploymentResponse {
  __type?: "GetDeploymentResponse";
  /**
   * <p>The identifier for the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   */
  DeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   */
  AutoDeployed?: boolean;

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
  export const filterSensitiveLog = (obj: GetDeploymentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDeploymentResponse => __isa(o, "GetDeploymentResponse");
}

export interface GetDeploymentsRequest {
  __type?: "GetDeploymentsRequest";
  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace GetDeploymentsRequest {
  export const filterSensitiveLog = (obj: GetDeploymentsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDeploymentsRequest => __isa(o, "GetDeploymentsRequest");
}

export interface GetDeploymentsResponse {
  __type?: "GetDeploymentsResponse";
  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Deployment[];
}

export namespace GetDeploymentsResponse {
  export const filterSensitiveLog = (obj: GetDeploymentsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDeploymentsResponse => __isa(o, "GetDeploymentsResponse");
}

export interface GetDomainNameRequest {
  __type?: "GetDomainNameRequest";
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;
}

export namespace GetDomainNameRequest {
  export const filterSensitiveLog = (obj: GetDomainNameRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainNameRequest => __isa(o, "GetDomainNameRequest");
}

export interface GetDomainNameResponse {
  __type?: "GetDomainNameResponse";
  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The name of the DomainName resource.</p>
   */
  DomainName?: string;

  /**
   * <p>The API mapping selection expression.</p>
   */
  ApiMappingSelectionExpression?: string;
}

export namespace GetDomainNameResponse {
  export const filterSensitiveLog = (obj: GetDomainNameResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainNameResponse => __isa(o, "GetDomainNameResponse");
}

export interface GetDomainNamesRequest {
  __type?: "GetDomainNamesRequest";
  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;
}

export namespace GetDomainNamesRequest {
  export const filterSensitiveLog = (obj: GetDomainNamesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainNamesRequest => __isa(o, "GetDomainNamesRequest");
}

export interface GetDomainNamesResponse {
  __type?: "GetDomainNamesResponse";
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
  export const filterSensitiveLog = (obj: GetDomainNamesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainNamesResponse => __isa(o, "GetDomainNamesResponse");
}

export interface GetIntegrationRequest {
  __type?: "GetIntegrationRequest";
  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace GetIntegrationRequest {
  export const filterSensitiveLog = (obj: GetIntegrationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetIntegrationRequest => __isa(o, "GetIntegrationRequest");
}

export interface GetIntegrationResponseRequest {
  __type?: "GetIntegrationResponseRequest";
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
  export const filterSensitiveLog = (obj: GetIntegrationResponseRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetIntegrationResponseRequest => __isa(o, "GetIntegrationResponseRequest");
}

export interface GetIntegrationResponseResponse {
  __type?: "GetIntegrationResponseResponse";
  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId?: string;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: { [key: string]: string };

  /**
   * <p>The template selection expressions for the integration response.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey?: string;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: { [key: string]: string };

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;
}

export namespace GetIntegrationResponseResponse {
  export const filterSensitiveLog = (obj: GetIntegrationResponseResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetIntegrationResponseResponse => __isa(o, "GetIntegrationResponseResponse");
}

export interface GetIntegrationResponsesRequest {
  __type?: "GetIntegrationResponsesRequest";
  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace GetIntegrationResponsesRequest {
  export const filterSensitiveLog = (obj: GetIntegrationResponsesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetIntegrationResponsesRequest => __isa(o, "GetIntegrationResponsesRequest");
}

export interface GetIntegrationResponsesResponse {
  __type?: "GetIntegrationResponsesResponse";
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
  export const filterSensitiveLog = (obj: GetIntegrationResponsesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetIntegrationResponsesResponse => __isa(o, "GetIntegrationResponsesResponse");
}

export interface GetIntegrationResult {
  __type?: "GetIntegrationResult";
  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with the Lambda function-invoking action with the client request passed through as-is. This integration is also referred to as Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>Represents the description of an integration.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfig;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   */
  IntegrationResponseSelectionExpression?: string;

  /**
   * <p>Represents the identifier of an integration.</p>
   */
  IntegrationId?: string;

  /**
   * <p>A key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
   *                , where
   *                   <replaceable>{location}</replaceable>
   *                 is querystring, path, or header; and
   *                   <replaceable>{name}</replaceable>
   *                 must be a valid and unique method request parameter name. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: string };

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;
}

export namespace GetIntegrationResult {
  export const filterSensitiveLog = (obj: GetIntegrationResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetIntegrationResult => __isa(o, "GetIntegrationResult");
}

export interface GetIntegrationsRequest {
  __type?: "GetIntegrationsRequest";
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;
}

export namespace GetIntegrationsRequest {
  export const filterSensitiveLog = (obj: GetIntegrationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetIntegrationsRequest => __isa(o, "GetIntegrationsRequest");
}

export interface GetIntegrationsResponse {
  __type?: "GetIntegrationsResponse";
  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Integration[];
}

export namespace GetIntegrationsResponse {
  export const filterSensitiveLog = (obj: GetIntegrationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetIntegrationsResponse => __isa(o, "GetIntegrationsResponse");
}

export interface GetModelRequest {
  __type?: "GetModelRequest";
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
  export const filterSensitiveLog = (obj: GetModelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetModelRequest => __isa(o, "GetModelRequest");
}

export interface GetModelResponse {
  __type?: "GetModelResponse";
  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema?: string;

  /**
   * <p>The model identifier.</p>
   */
  ModelId?: string;
}

export namespace GetModelResponse {
  export const filterSensitiveLog = (obj: GetModelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetModelResponse => __isa(o, "GetModelResponse");
}

export interface GetModelsRequest {
  __type?: "GetModelsRequest";
  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace GetModelsRequest {
  export const filterSensitiveLog = (obj: GetModelsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetModelsRequest => __isa(o, "GetModelsRequest");
}

export interface GetModelsResponse {
  __type?: "GetModelsResponse";
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
  export const filterSensitiveLog = (obj: GetModelsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetModelsResponse => __isa(o, "GetModelsResponse");
}

export interface GetModelTemplateRequest {
  __type?: "GetModelTemplateRequest";
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
  export const filterSensitiveLog = (obj: GetModelTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetModelTemplateRequest => __isa(o, "GetModelTemplateRequest");
}

export interface GetModelTemplateResponse {
  __type?: "GetModelTemplateResponse";
  /**
   * <p>The template value.</p>
   */
  Value?: string;
}

export namespace GetModelTemplateResponse {
  export const filterSensitiveLog = (obj: GetModelTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetModelTemplateResponse => __isa(o, "GetModelTemplateResponse");
}

export interface GetRouteRequest {
  __type?: "GetRouteRequest";
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
  export const filterSensitiveLog = (obj: GetRouteRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRouteRequest => __isa(o, "GetRouteRequest");
}

export interface GetRouteResponseRequest {
  __type?: "GetRouteResponseRequest";
  /**
   * <p>The route response ID.</p>
   */
  RouteResponseId: string | undefined;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace GetRouteResponseRequest {
  export const filterSensitiveLog = (obj: GetRouteResponseRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRouteResponseRequest => __isa(o, "GetRouteResponseRequest");
}

export interface GetRouteResponseResponse {
  __type?: "GetRouteResponseResponse";
  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>Represents the response models of a route response.</p>
   */
  ResponseModels?: { [key: string]: string };

  /**
   * <p>Represents the route response key of a route response.</p>
   */
  RouteResponseKey?: string;

  /**
   * <p>Represents the identifier of a route response.</p>
   */
  RouteResponseId?: string;

  /**
   * <p>Represents the response parameters of a route response.</p>
   */
  ResponseParameters?: { [key: string]: ParameterConstraints };
}

export namespace GetRouteResponseResponse {
  export const filterSensitiveLog = (obj: GetRouteResponseResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRouteResponseResponse => __isa(o, "GetRouteResponseResponse");
}

export interface GetRouteResponsesRequest {
  __type?: "GetRouteResponsesRequest";
  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace GetRouteResponsesRequest {
  export const filterSensitiveLog = (obj: GetRouteResponsesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRouteResponsesRequest => __isa(o, "GetRouteResponsesRequest");
}

export interface GetRouteResponsesResponse {
  __type?: "GetRouteResponsesResponse";
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
  export const filterSensitiveLog = (obj: GetRouteResponsesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRouteResponsesResponse => __isa(o, "GetRouteResponsesResponse");
}

export interface GetRouteResult {
  __type?: "GetRouteResult";
  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: { [key: string]: string };

  /**
   * <p>The route ID.</p>
   */
  RouteId?: string;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey?: string;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens.</p>
   */
  AuthorizationType?: AuthorizationType | string;
}

export namespace GetRouteResult {
  export const filterSensitiveLog = (obj: GetRouteResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRouteResult => __isa(o, "GetRouteResult");
}

export interface GetRoutesRequest {
  __type?: "GetRoutesRequest";
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
  export const filterSensitiveLog = (obj: GetRoutesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRoutesRequest => __isa(o, "GetRoutesRequest");
}

export interface GetRoutesResponse {
  __type?: "GetRoutesResponse";
  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Route[];
}

export namespace GetRoutesResponse {
  export const filterSensitiveLog = (obj: GetRoutesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRoutesResponse => __isa(o, "GetRoutesResponse");
}

export interface GetStageRequest {
  __type?: "GetStageRequest";
  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace GetStageRequest {
  export const filterSensitiveLog = (obj: GetStageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetStageRequest => __isa(o, "GetStageRequest");
}

export interface GetStageResponse {
  __type?: "GetStageResponse";
  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

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
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   */
  LastDeploymentStatusMessage?: string;

  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The name of the stage.</p>
   */
  StageName?: string;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   */
  RouteSettings?: { [key: string]: RouteSettings };
}

export namespace GetStageResponse {
  export const filterSensitiveLog = (obj: GetStageResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetStageResponse => __isa(o, "GetStageResponse");
}

export interface GetStagesRequest {
  __type?: "GetStagesRequest";
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
  export const filterSensitiveLog = (obj: GetStagesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetStagesRequest => __isa(o, "GetStagesRequest");
}

export interface GetStagesResponse {
  __type?: "GetStagesResponse";
  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Stage[];
}

export namespace GetStagesResponse {
  export const filterSensitiveLog = (obj: GetStagesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetStagesResponse => __isa(o, "GetStagesResponse");
}

export interface GetTagsRequest {
  __type?: "GetTagsRequest";
  /**
   * <p>The resource ARN for the tag.</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetTagsRequest {
  export const filterSensitiveLog = (obj: GetTagsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetTagsRequest => __isa(o, "GetTagsRequest");
}

export interface GetTagsResponse {
  __type?: "GetTagsResponse";
  /**
   * <p>Represents a collection of tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetTagsResponse {
  export const filterSensitiveLog = (obj: GetTagsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetTagsResponse => __isa(o, "GetTagsResponse");
}

export interface GetVpcLinkRequest {
  __type?: "GetVpcLinkRequest";
  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId: string | undefined;
}

export namespace GetVpcLinkRequest {
  export const filterSensitiveLog = (obj: GetVpcLinkRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVpcLinkRequest => __isa(o, "GetVpcLinkRequest");
}

export interface GetVpcLinkResponse {
  __type?: "GetVpcLinkResponse";
  /**
   * <p>A list of security group IDs for the VPC link.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The name of the VPC link.</p>
   */
  Name?: string;

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   */
  VpcLinkStatusMessage?: string;

  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId?: string;

  /**
   * <p>Tags for the VPC link.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The status of the VPC link.</p>
   */
  VpcLinkStatus?: VpcLinkStatus | string;

  /**
   * <p>The timestamp when the VPC link was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The version of the VPC link.</p>
   */
  VpcLinkVersion?: VpcLinkVersion | string;
}

export namespace GetVpcLinkResponse {
  export const filterSensitiveLog = (obj: GetVpcLinkResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVpcLinkResponse => __isa(o, "GetVpcLinkResponse");
}

export interface GetVpcLinksRequest {
  __type?: "GetVpcLinksRequest";
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
  export const filterSensitiveLog = (obj: GetVpcLinksRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVpcLinksRequest => __isa(o, "GetVpcLinksRequest");
}

export interface GetVpcLinksResponse {
  __type?: "GetVpcLinksResponse";
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
  export const filterSensitiveLog = (obj: GetVpcLinksResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVpcLinksResponse => __isa(o, "GetVpcLinksResponse");
}

/**
 * <p></p>
 */
export interface ImportApiRequest {
  __type?: "ImportApiRequest";
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
  export const filterSensitiveLog = (obj: ImportApiRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImportApiRequest => __isa(o, "ImportApiRequest");
}

export interface ImportApiResponse {
  __type?: "ImportApiResponse";
  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType?: ProtocolType | string;
}

export namespace ImportApiResponse {
  export const filterSensitiveLog = (obj: ImportApiResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImportApiResponse => __isa(o, "ImportApiResponse");
}

/**
 * <p>Represents an integration.</p>
 */
export interface Integration {
  __type?: "Integration";
  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfig;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Represents the description of an integration.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>Represents the identifier of an integration.</p>
   */
  IntegrationId?: string;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with the Lambda function-invoking action with the client request passed through as-is. This integration is also referred to as Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   */
  IntegrationResponseSelectionExpression?: string;

  /**
   * <p>A key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
   *                , where
   *                   <replaceable>{location}</replaceable>
   *                 is querystring, path, or header; and
   *                   <replaceable>{name}</replaceable>
   *                 must be a valid and unique method request parameter name. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: string };

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;
}

export namespace Integration {
  export const filterSensitiveLog = (obj: Integration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Integration => __isa(o, "Integration");
}

/**
 * <p>Represents an integration response.</p>
 */
export interface IntegrationResponse {
  __type?: "IntegrationResponse";
  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: { [key: string]: string };

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: { [key: string]: string };

  /**
   * <p>The template selection expressions for the integration response.</p>
   */
  TemplateSelectionExpression?: string;

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
}

export namespace IntegrationResponse {
  export const filterSensitiveLog = (obj: IntegrationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IntegrationResponse => __isa(o, "IntegrationResponse");
}

export enum IntegrationType {
  AWS = "AWS",
  AWS_PROXY = "AWS_PROXY",
  HTTP = "HTTP",
  HTTP_PROXY = "HTTP_PROXY",
  MOCK = "MOCK",
}

/**
 * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
 */
export interface JWTConfiguration {
  __type?: "JWTConfiguration";
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
  export const filterSensitiveLog = (obj: JWTConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JWTConfiguration => __isa(o, "JWTConfiguration");
}

export enum LoggingLevel {
  ERROR = "ERROR",
  INFO = "INFO",
  OFF = "OFF",
}

/**
 * <p>Represents a data model for an API. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response Mappings</a>.</p>
 */
export interface Model {
  __type?: "Model";
  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name: string | undefined;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema?: string;

  /**
   * <p>The model identifier.</p>
   */
  ModelId?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;
}

export namespace Model {
  export const filterSensitiveLog = (obj: Model): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Model => __isa(o, "Model");
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
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NotFoundException => __isa(o, "NotFoundException");
}

/**
 * <p>Validation constraints imposed on parameters of a request (path, query string, headers).</p>
 */
export interface ParameterConstraints {
  __type?: "ParameterConstraints";
  /**
   * <p>Whether or not the parameter is required.</p>
   */
  Required?: boolean;
}

export namespace ParameterConstraints {
  export const filterSensitiveLog = (obj: ParameterConstraints): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ParameterConstraints => __isa(o, "ParameterConstraints");
}

export enum PassthroughBehavior {
  NEVER = "NEVER",
  WHEN_NO_MATCH = "WHEN_NO_MATCH",
  WHEN_NO_TEMPLATES = "WHEN_NO_TEMPLATES",
}

export enum ProtocolType {
  HTTP = "HTTP",
  WEBSOCKET = "WEBSOCKET",
}

/**
 * <p></p>
 */
export interface ReimportApiRequest {
  __type?: "ReimportApiRequest";
  /**
   * <p>The OpenAPI definition. Supported only for HTTP APIs.</p>
   */
  Body: string | undefined;

  /**
   * <p>Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.</p>
   */
  FailOnWarnings?: boolean;

  /**
   * <p>Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.</p>
   */
  Basepath?: string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace ReimportApiRequest {
  export const filterSensitiveLog = (obj: ReimportApiRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReimportApiRequest => __isa(o, "ReimportApiRequest");
}

export interface ReimportApiResponse {
  __type?: "ReimportApiResponse";
  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType?: ProtocolType | string;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;
}

export namespace ReimportApiResponse {
  export const filterSensitiveLog = (obj: ReimportApiResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReimportApiResponse => __isa(o, "ReimportApiResponse");
}

/**
 * <p>Represents a route.</p>
 */
export interface Route {
  __type?: "Route";
  /**
   * <p>The route key for the route.</p>
   */
  RouteKey: string | undefined;

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The route ID.</p>
   */
  RouteId?: string;

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
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   */
  ApiGatewayManaged?: boolean;
}

export namespace Route {
  export const filterSensitiveLog = (obj: Route): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Route => __isa(o, "Route");
}

/**
 * <p>Represents a route response.</p>
 */
export interface RouteResponse {
  __type?: "RouteResponse";
  /**
   * <p>Represents the identifier of a route response.</p>
   */
  RouteResponseId?: string;

  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>Represents the response parameters of a route response.</p>
   */
  ResponseParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>Represents the response models of a route response.</p>
   */
  ResponseModels?: { [key: string]: string };

  /**
   * <p>Represents the route response key of a route response.</p>
   */
  RouteResponseKey: string | undefined;
}

export namespace RouteResponse {
  export const filterSensitiveLog = (obj: RouteResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RouteResponse => __isa(o, "RouteResponse");
}

/**
 * <p>Represents a collection of route settings.</p>
 */
export interface RouteSettings {
  __type?: "RouteSettings";
  /**
   * <p>Specifies whether detailed metrics are enabled.</p>
   */
  DetailedMetricsEnabled?: boolean;

  /**
   * <p>Specifies the throttling rate limit.</p>
   */
  ThrottlingRateLimit?: number;

  /**
   * <p>Specifies the logging level for this route: INFO, ERROR, or OFF. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.</p>
   */
  LoggingLevel?: LoggingLevel | string;

  /**
   * <p>Specifies the throttling burst limit.</p>
   */
  ThrottlingBurstLimit?: number;

  /**
   * <p>Specifies whether (true) or not (false) data trace logging is enabled for this route. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.</p>
   */
  DataTraceEnabled?: boolean;
}

export namespace RouteSettings {
  export const filterSensitiveLog = (obj: RouteSettings): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RouteSettings => __isa(o, "RouteSettings");
}

export enum SecurityPolicy {
  TLS_1_0 = "TLS_1_0",
  TLS_1_2 = "TLS_1_2",
}

/**
 * <p>Represents an API stage.</p>
 */
export interface Stage {
  __type?: "Stage";
  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   */
  LastDeploymentStatusMessage?: string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The timestamp when the stage was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   */
  RouteSettings?: { [key: string]: RouteSettings };

  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;
}

export namespace Stage {
  export const filterSensitiveLog = (obj: Stage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Stage => __isa(o, "Stage");
}

/**
 * <p>Creates a new Tag resource to represent a tag.</p>
 */
export interface TagResourceRequest {
  __type?: "TagResourceRequest";
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
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

/**
 * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
 */
export interface TlsConfig {
  __type?: "TlsConfig";
  /**
   * <p>If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate. The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting.</p>
   */
  ServerNameToVerify?: string;
}

export namespace TlsConfig {
  export const filterSensitiveLog = (obj: TlsConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TlsConfig => __isa(o, "TlsConfig");
}

/**
 * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
 */
export interface TlsConfigInput {
  __type?: "TlsConfigInput";
  /**
   * <p>If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate. The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting.</p>
   */
  ServerNameToVerify?: string;
}

export namespace TlsConfigInput {
  export const filterSensitiveLog = (obj: TlsConfigInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TlsConfigInput => __isa(o, "TlsConfigInput");
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
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TooManyRequestsException => __isa(o, "TooManyRequestsException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Tag keys to delete</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The resource ARN for the tag.</p>
   */
  ResourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

/**
 * <p>Updates an ApiMapping.</p>
 */
export interface UpdateApiMappingRequest {
  __type?: "UpdateApiMappingRequest";
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The API stage.</p>
   */
  Stage?: string;

  /**
   * <p>The API mapping key.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId: string | undefined;
}

export namespace UpdateApiMappingRequest {
  export const filterSensitiveLog = (obj: UpdateApiMappingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateApiMappingRequest => __isa(o, "UpdateApiMappingRequest");
}

export interface UpdateApiMappingResponse {
  __type?: "UpdateApiMappingResponse";
  /**
   * <p>The API stage.</p>
   */
  Stage?: string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId?: string;

  /**
   * <p>The API mapping key.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId?: string;
}

export namespace UpdateApiMappingResponse {
  export const filterSensitiveLog = (obj: UpdateApiMappingResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateApiMappingResponse => __isa(o, "UpdateApiMappingResponse");
}

/**
 * <p>Updates an Api.</p>
 */
export interface UpdateApiRequest {
  __type?: "UpdateApiRequest";
  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null. Currently, this property is not used for HTTP integrations. If provided, this value replaces the credentials associated with the quick create integration. Supported only for HTTP APIs.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>This property is part of quick create. If not specified, the route created using quick create is kept. Otherwise, this value replaces the route key of the quick create route. Additional routes may still be added after the API is updated. Supported only for HTTP APIs.</p>
   */
  RouteKey?: string;

  /**
   * <p>This property is part of quick create. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. The value provided updates the integration URI and integration type. You can update a quick-created target, but you can't remove it from an API. Supported only for HTTP APIs.</p>
   */
  Target?: string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace UpdateApiRequest {
  export const filterSensitiveLog = (obj: UpdateApiRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateApiRequest => __isa(o, "UpdateApiRequest");
}

export interface UpdateApiResponse {
  __type?: "UpdateApiResponse";
  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType?: ProtocolType | string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;
}

export namespace UpdateApiResponse {
  export const filterSensitiveLog = (obj: UpdateApiResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateApiResponse => __isa(o, "UpdateApiResponse");
}

/**
 * <p>Updates an Authorizer.</p>
 */
export interface UpdateAuthorizerRequest {
  __type?: "UpdateAuthorizerRequest";
  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. Currently, the identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name. These parameters will be used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example "$request.header.Authorization".</p>
   */
  IdentitySource?: string[];

  /**
   * <p>The name of the authorizer.</p>
   */
  Name?: string;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>This parameter is not used.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId: string | undefined;

  /**
   * <p>Authorizer caching is not currently supported. Don't specify this value for authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;
}

export namespace UpdateAuthorizerRequest {
  export const filterSensitiveLog = (obj: UpdateAuthorizerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateAuthorizerRequest => __isa(o, "UpdateAuthorizerRequest");
}

export interface UpdateAuthorizerResponse {
  __type?: "UpdateAuthorizerResponse";
  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. Currently, the identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name. These parameters will be used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example "$request.header.Authorization".</p>
   */
  IdentitySource?: string[];

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). ForREQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name?: string;

  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>Authorizer caching is not currently supported. Don't specify this value for authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.</p>
   */
  AuthorizerType?: AuthorizerType | string;
}

export namespace UpdateAuthorizerResponse {
  export const filterSensitiveLog = (obj: UpdateAuthorizerResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateAuthorizerResponse => __isa(o, "UpdateAuthorizerResponse");
}

/**
 * <p>Updates a Deployment.</p>
 */
export interface UpdateDeploymentRequest {
  __type?: "UpdateDeploymentRequest";
  /**
   * <p>The deployment ID.</p>
   */
  DeploymentId: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The description for the deployment resource.</p>
   */
  Description?: string;
}

export namespace UpdateDeploymentRequest {
  export const filterSensitiveLog = (obj: UpdateDeploymentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDeploymentRequest => __isa(o, "UpdateDeploymentRequest");
}

export interface UpdateDeploymentResponse {
  __type?: "UpdateDeploymentResponse";
  /**
   * <p>The identifier for the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The description for the deployment.</p>
   */
  Description?: string;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   */
  DeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   */
  AutoDeployed?: boolean;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   */
  DeploymentStatusMessage?: string;
}

export namespace UpdateDeploymentResponse {
  export const filterSensitiveLog = (obj: UpdateDeploymentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDeploymentResponse => __isa(o, "UpdateDeploymentResponse");
}

/**
 * <p>Updates a DomainName.</p>
 */
export interface UpdateDomainNameRequest {
  __type?: "UpdateDomainNameRequest";
  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;
}

export namespace UpdateDomainNameRequest {
  export const filterSensitiveLog = (obj: UpdateDomainNameRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDomainNameRequest => __isa(o, "UpdateDomainNameRequest");
}

export interface UpdateDomainNameResponse {
  __type?: "UpdateDomainNameResponse";
  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The API mapping selection expression.</p>
   */
  ApiMappingSelectionExpression?: string;

  /**
   * <p>The name of the DomainName resource.</p>
   */
  DomainName?: string;
}

export namespace UpdateDomainNameResponse {
  export const filterSensitiveLog = (obj: UpdateDomainNameResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDomainNameResponse => __isa(o, "UpdateDomainNameResponse");
}

/**
 * <p>Updates an Integration.</p>
 */
export interface UpdateIntegrationRequest {
  __type?: "UpdateIntegrationRequest";
  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfigInput;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>The description of the integration</p>
   */
  Description?: string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with the Lambda function-invoking action with the client request passed through as-is. This integration is also referred to as Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration. For HTTP API private integrations, use an HTTP_PROXY integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The template selection expression for the integration.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>A key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
   *                , where
   *                   <replaceable>{location}</replaceable>
   *                 is querystring, path, or header; and
   *                   <replaceable>{name}</replaceable>
   *                 must be a valid and unique method request parameter name. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: string };

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;
}

export namespace UpdateIntegrationRequest {
  export const filterSensitiveLog = (obj: UpdateIntegrationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateIntegrationRequest => __isa(o, "UpdateIntegrationRequest");
}

/**
 * <p>Updates an IntegrationResponses.</p>
 */
export interface UpdateIntegrationResponseRequest {
  __type?: "UpdateIntegrationResponseRequest";
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

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId: string | undefined;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey?: string;
}

export namespace UpdateIntegrationResponseRequest {
  export const filterSensitiveLog = (obj: UpdateIntegrationResponseRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateIntegrationResponseRequest => __isa(o, "UpdateIntegrationResponseRequest");
}

export interface UpdateIntegrationResponseResponse {
  __type?: "UpdateIntegrationResponseResponse";
  /**
   * <p>The template selection expressions for the integration response.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: { [key: string]: string };

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey?: string;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: { [key: string]: string };

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId?: string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;
}

export namespace UpdateIntegrationResponseResponse {
  export const filterSensitiveLog = (obj: UpdateIntegrationResponseResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateIntegrationResponseResponse => __isa(o, "UpdateIntegrationResponseResponse");
}

export interface UpdateIntegrationResult {
  __type?: "UpdateIntegrationResult";
  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   */
  IntegrationResponseSelectionExpression?: string;

  /**
   * <p>Represents the description of an integration.</p>
   */
  Description?: string;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with the Lambda function-invoking action with the client request passed through as-is. This integration is also referred to as Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfig;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Represents the identifier of an integration.</p>
   */
  IntegrationId?: string;

  /**
   * <p>A key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
   *                , where
   *                   <replaceable>{location}</replaceable>
   *                 is querystring, path, or header; and
   *                   <replaceable>{name}</replaceable>
   *                 must be a valid and unique method request parameter name. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: string };
}

export namespace UpdateIntegrationResult {
  export const filterSensitiveLog = (obj: UpdateIntegrationResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateIntegrationResult => __isa(o, "UpdateIntegrationResult");
}

/**
 * <p>Updates a Model.</p>
 */
export interface UpdateModelRequest {
  __type?: "UpdateModelRequest";
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The model ID.</p>
   */
  ModelId: string | undefined;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema?: string;

  /**
   * <p>The name of the model.</p>
   */
  Name?: string;

  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;
}

export namespace UpdateModelRequest {
  export const filterSensitiveLog = (obj: UpdateModelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateModelRequest => __isa(o, "UpdateModelRequest");
}

export interface UpdateModelResponse {
  __type?: "UpdateModelResponse";
  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name?: string;

  /**
   * <p>The model identifier.</p>
   */
  ModelId?: string;
}

export namespace UpdateModelResponse {
  export const filterSensitiveLog = (obj: UpdateModelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateModelResponse => __isa(o, "UpdateModelResponse");
}

/**
 * <p>Updates a Route.</p>
 */
export interface UpdateRouteRequest {
  __type?: "UpdateRouteRequest";
  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: { [key: string]: string };

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The authorization scopes supported by this route.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>Specifies whether an API key is required for the route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey?: string;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;
}

export namespace UpdateRouteRequest {
  export const filterSensitiveLog = (obj: UpdateRouteRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateRouteRequest => __isa(o, "UpdateRouteRequest");
}

/**
 * <p>Updates a RouteResponse.</p>
 */
export interface UpdateRouteResponseRequest {
  __type?: "UpdateRouteResponseRequest";
  /**
   * <p>The model selection expression for the route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The route response key.</p>
   */
  RouteResponseKey?: string;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The response models for the route response.</p>
   */
  ResponseModels?: { [key: string]: string };

  /**
   * <p>The route response parameters.</p>
   */
  ResponseParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>The route response ID.</p>
   */
  RouteResponseId: string | undefined;
}

export namespace UpdateRouteResponseRequest {
  export const filterSensitiveLog = (obj: UpdateRouteResponseRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateRouteResponseRequest => __isa(o, "UpdateRouteResponseRequest");
}

export interface UpdateRouteResponseResponse {
  __type?: "UpdateRouteResponseResponse";
  /**
   * <p>Represents the response models of a route response.</p>
   */
  ResponseModels?: { [key: string]: string };

  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>Represents the response parameters of a route response.</p>
   */
  ResponseParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>Represents the route response key of a route response.</p>
   */
  RouteResponseKey?: string;

  /**
   * <p>Represents the identifier of a route response.</p>
   */
  RouteResponseId?: string;
}

export namespace UpdateRouteResponseResponse {
  export const filterSensitiveLog = (obj: UpdateRouteResponseResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateRouteResponseResponse => __isa(o, "UpdateRouteResponseResponse");
}

export interface UpdateRouteResult {
  __type?: "UpdateRouteResult";
  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: { [key: string]: ParameterConstraints };

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: { [key: string]: string };

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The route ID.</p>
   */
  RouteId?: string;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey?: string;

  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  AuthorizationScopes?: string[];
}

export namespace UpdateRouteResult {
  export const filterSensitiveLog = (obj: UpdateRouteResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateRouteResult => __isa(o, "UpdateRouteResult");
}

/**
 * <p>Updates a Stage.</p>
 */
export interface UpdateStageRequest {
  __type?: "UpdateStageRequest";
  /**
   * <p>The identifier of a client certificate for a Stage.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>Route settings for the stage.</p>
   */
  RouteSettings?: { [key: string]: RouteSettings };

  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The description for the API stage.</p>
   */
  Description?: string;

  /**
   * <p>A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;

  /**
   * <p>The default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace UpdateStageRequest {
  export const filterSensitiveLog = (obj: UpdateStageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateStageRequest => __isa(o, "UpdateStageRequest");
}

export interface UpdateStageResponse {
  __type?: "UpdateStageResponse";
  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   */
  RouteSettings?: { [key: string]: RouteSettings };

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The timestamp when the stage was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   */
  LastDeploymentStatusMessage?: string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The name of the stage.</p>
   */
  StageName?: string;
}

export namespace UpdateStageResponse {
  export const filterSensitiveLog = (obj: UpdateStageResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateStageResponse => __isa(o, "UpdateStageResponse");
}

/**
 * <p>Updates a VPC link.</p>
 */
export interface UpdateVpcLinkRequest {
  __type?: "UpdateVpcLinkRequest";
  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId: string | undefined;

  /**
   * <p>The name of the VPC link.</p>
   */
  Name?: string;
}

export namespace UpdateVpcLinkRequest {
  export const filterSensitiveLog = (obj: UpdateVpcLinkRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVpcLinkRequest => __isa(o, "UpdateVpcLinkRequest");
}

export interface UpdateVpcLinkResponse {
  __type?: "UpdateVpcLinkResponse";
  /**
   * <p>The name of the VPC link.</p>
   */
  Name?: string;

  /**
   * <p>The version of the VPC link.</p>
   */
  VpcLinkVersion?: VpcLinkVersion | string;

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   */
  VpcLinkStatusMessage?: string;

  /**
   * <p>The timestamp when the VPC link was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The status of the VPC link.</p>
   */
  VpcLinkStatus?: VpcLinkStatus | string;

  /**
   * <p>Tags for the VPC link.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId?: string;

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   */
  SubnetIds?: string[];
}

export namespace UpdateVpcLinkResponse {
  export const filterSensitiveLog = (obj: UpdateVpcLinkResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVpcLinkResponse => __isa(o, "UpdateVpcLinkResponse");
}

/**
 * <p>Represents a VPC link.</p>
 */
export interface VpcLink {
  __type?: "VpcLink";
  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId: string | undefined;

  /**
   * <p>The status of the VPC link.</p>
   */
  VpcLinkStatus?: VpcLinkStatus | string;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The name of the VPC link.</p>
   */
  Name: string | undefined;

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   */
  VpcLinkStatusMessage?: string;

  /**
   * <p>Tags for the VPC link.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The version of the VPC link.</p>
   */
  VpcLinkVersion?: VpcLinkVersion | string;

  /**
   * <p>The timestamp when the VPC link was created.</p>
   */
  CreatedDate?: Date;
}

export namespace VpcLink {
  export const filterSensitiveLog = (obj: VpcLink): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VpcLink => __isa(o, "VpcLink");
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
