import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AccessDeniedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return _smithy.isa(o, "AccessDeniedException");
  }
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
  export function isa(o: any): o is AccessLogSettings {
    return _smithy.isa(o, "AccessLogSettings");
  }
}

/**
 * <p>Represents an API.</p>
 */
export interface Api {
  __type?: "Api";
  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

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
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: Array<string>;

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
  Warnings?: Array<string>;
}

export namespace Api {
  export function isa(o: any): o is Api {
    return _smithy.isa(o, "Api");
  }
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
  export function isa(o: any): o is ApiMapping {
    return _smithy.isa(o, "ApiMapping");
  }
}

export enum AuthorizationType {
  AWS_IAM = "AWS_IAM",
  CUSTOM = "CUSTOM",
  JWT = "JWT",
  NONE = "NONE"
}

/**
 * <p>Represents an authorizer.</p>
 */
export interface Authorizer {
  __type?: "Authorizer";
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>Authorizer caching is not currently supported. Don't specify this value for authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). ForREQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. Currently, the identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name. These parameters will be used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example "$request.header.Authorization".</p>
   */
  IdentitySource?: Array<string>;

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
  export function isa(o: any): o is Authorizer {
    return _smithy.isa(o, "Authorizer");
  }
}

export enum AuthorizerType {
  JWT = "JWT",
  REQUEST = "REQUEST"
}

/**
 * <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 */
export interface BadRequestException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * <p>Describes the error encountered.</p>
   */
  Message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return _smithy.isa(o, "BadRequestException");
  }
}

/**
 * <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
 */
export interface ConflictException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>Describes the error encountered.</p>
   */
  Message?: string;
}

export namespace ConflictException {
  export function isa(o: any): o is ConflictException {
    return _smithy.isa(o, "ConflictException");
  }
}

export enum ConnectionType {
  INTERNET = "INTERNET",
  VPC_LINK = "VPC_LINK"
}

export enum ContentHandlingStrategy {
  CONVERT_TO_BINARY = "CONVERT_TO_BINARY",
  CONVERT_TO_TEXT = "CONVERT_TO_TEXT"
}

/**
 * <p>Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.</p>
 */
export interface Cors {
  __type?: "Cors";
  /**
   * <p>Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs.</p>
   */
  AllowCredentials?: boolean;

  /**
   * <p>Represents a collection of allowed headers. Supported only for HTTP APIs.</p>
   */
  AllowHeaders?: Array<string>;

  /**
   * <p>Represents a collection of allowed HTTP methods. Supported only for HTTP APIs.</p>
   */
  AllowMethods?: Array<string>;

  /**
   * <p>Represents a collection of allowed origins. Supported only for HTTP APIs.</p>
   */
  AllowOrigins?: Array<string>;

  /**
   * <p>Represents a collection of exposed headers. Supported only for HTTP APIs.</p>
   */
  ExposeHeaders?: Array<string>;

  /**
   * <p>The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs.</p>
   */
  MaxAge?: number;
}

export namespace Cors {
  export function isa(o: any): o is Cors {
    return _smithy.isa(o, "Cors");
  }
}

/**
 * <p>Creates a new ApiMapping resource to represent an API mapping.</p>
 */
export interface CreateApiMappingRequest {
  __type?: "CreateApiMappingRequest";
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
  export function isa(o: any): o is CreateApiMappingRequest {
    return _smithy.isa(o, "CreateApiMappingRequest");
  }
}

export interface CreateApiMappingResponse extends $MetadataBearer {
  __type?: "CreateApiMappingResponse";
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
  export function isa(o: any): o is CreateApiMappingResponse {
    return _smithy.isa(o, "CreateApiMappingResponse");
  }
}

/**
 * <p>Creates a new Api resource to represent an API.</p>
 */
export interface CreateApiRequest {
  __type?: "CreateApiRequest";
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
  export function isa(o: any): o is CreateApiRequest {
    return _smithy.isa(o, "CreateApiRequest");
  }
}

export interface CreateApiResponse extends $MetadataBearer {
  __type?: "CreateApiResponse";
  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

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
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: Array<string>;

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
  Warnings?: Array<string>;
}

export namespace CreateApiResponse {
  export function isa(o: any): o is CreateApiResponse {
    return _smithy.isa(o, "CreateApiResponse");
  }
}

/**
 * <p>Creates a new Authorizer resource to represent an authorizer.</p>
 */
export interface CreateAuthorizerRequest {
  __type?: "CreateAuthorizerRequest";
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>Authorizer caching is not currently supported. Don't specify this value for authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.</p>
   */
  AuthorizerType: AuthorizerType | string | undefined;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. Currently, the identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name. These parameters will be used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT )from inbound requests. Currently only header-based and query parameter-based selections are supported, for example "$request.header.Authorization".</p>
   */
  IdentitySource: Array<string> | undefined;

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
  export function isa(o: any): o is CreateAuthorizerRequest {
    return _smithy.isa(o, "CreateAuthorizerRequest");
  }
}

export interface CreateAuthorizerResponse extends $MetadataBearer {
  __type?: "CreateAuthorizerResponse";
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>Authorizer caching is not currently supported. Don't specify this value for authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). ForREQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. Currently, the identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name. These parameters will be used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example "$request.header.Authorization".</p>
   */
  IdentitySource?: Array<string>;

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
  export function isa(o: any): o is CreateAuthorizerResponse {
    return _smithy.isa(o, "CreateAuthorizerResponse");
  }
}

/**
 * <p>Creates a new Deployment resource to represent a deployment.</p>
 */
export interface CreateDeploymentRequest {
  __type?: "CreateDeploymentRequest";
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
  export function isa(o: any): o is CreateDeploymentRequest {
    return _smithy.isa(o, "CreateDeploymentRequest");
  }
}

export interface CreateDeploymentResponse extends $MetadataBearer {
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
  export function isa(o: any): o is CreateDeploymentResponse {
    return _smithy.isa(o, "CreateDeploymentResponse");
  }
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
  DomainNameConfigurations?: Array<DomainNameConfiguration>;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDomainNameRequest {
  export function isa(o: any): o is CreateDomainNameRequest {
    return _smithy.isa(o, "CreateDomainNameRequest");
  }
}

export interface CreateDomainNameResponse extends $MetadataBearer {
  __type?: "CreateDomainNameResponse";
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
  DomainNameConfigurations?: Array<DomainNameConfiguration>;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDomainNameResponse {
  export function isa(o: any): o is CreateDomainNameResponse {
    return _smithy.isa(o, "CreateDomainNameResponse");
  }
}

/**
 * <p>Creates a new Integration resource to represent an integration.</p>
 */
export interface CreateIntegrationRequest {
  __type?: "CreateIntegrationRequest";
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The connection ID.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Currently the only valid value is INTERNET, for connections through the public routable internet.</p>
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
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with the Lambda function-invoking action with the client request passed through as-is. This integration is also referred to as Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType: IntegrationType | string | undefined;

  /**
   * <p>For a Lambda proxy integration, this is the URI of the Lambda function.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs. Currently, the only supported value is 1.0.</p>
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
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>The template selection expression for the integration.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds for WebSocket APIs. The default value is 5,000 milliseconds, or 5 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;
}

export namespace CreateIntegrationRequest {
  export function isa(o: any): o is CreateIntegrationRequest {
    return _smithy.isa(o, "CreateIntegrationRequest");
  }
}

/**
 * <p>Creates a new IntegrationResponse resource to represent an integration response.</p>
 */
export interface CreateIntegrationResponseRequest {
  __type?: "CreateIntegrationResponseRequest";
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
  export function isa(o: any): o is CreateIntegrationResponseRequest {
    return _smithy.isa(o, "CreateIntegrationResponseRequest");
  }
}

export interface CreateIntegrationResponseResponse extends $MetadataBearer {
  __type?: "CreateIntegrationResponseResponse";
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
  export function isa(o: any): o is CreateIntegrationResponseResponse {
    return _smithy.isa(o, "CreateIntegrationResponseResponse");
  }
}

export interface CreateIntegrationResult extends $MetadataBearer {
  __type?: "CreateIntegrationResult";
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The connection ID.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Currently the only valid value is INTERNET, for connections through the public routable internet.</p>
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
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with the Lambda function-invoking action with the client request passed through as-is. This integration is also referred to as Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda proxy integration, this is the URI of the Lambda function.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs. Currently, the only supported value is 1.0.</p>
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
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds for WebSocket APIs. The default value is 5,000 milliseconds, or 5 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;
}

export namespace CreateIntegrationResult {
  export function isa(o: any): o is CreateIntegrationResult {
    return _smithy.isa(o, "CreateIntegrationResult");
  }
}

/**
 * <p>Creates a new Model.</p>
 */
export interface CreateModelRequest {
  __type?: "CreateModelRequest";
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
  export function isa(o: any): o is CreateModelRequest {
    return _smithy.isa(o, "CreateModelRequest");
  }
}

export interface CreateModelResponse extends $MetadataBearer {
  __type?: "CreateModelResponse";
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
  export function isa(o: any): o is CreateModelResponse {
    return _smithy.isa(o, "CreateModelResponse");
  }
}

/**
 * <p>Creates a new Route resource to represent a route.</p>
 */
export interface CreateRouteRequest {
  __type?: "CreateRouteRequest";
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
  AuthorizationScopes?: Array<string>;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens.</p>
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
  export function isa(o: any): o is CreateRouteRequest {
    return _smithy.isa(o, "CreateRouteRequest");
  }
}

/**
 * <p>Creates a new RouteResponse resource to represent a route response.</p>
 */
export interface CreateRouteResponseRequest {
  __type?: "CreateRouteResponseRequest";
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
  export function isa(o: any): o is CreateRouteResponseRequest {
    return _smithy.isa(o, "CreateRouteResponseRequest");
  }
}

export interface CreateRouteResponseResponse extends $MetadataBearer {
  __type?: "CreateRouteResponseResponse";
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
  export function isa(o: any): o is CreateRouteResponseResponse {
    return _smithy.isa(o, "CreateRouteResponseResponse");
  }
}

export interface CreateRouteResult extends $MetadataBearer {
  __type?: "CreateRouteResult";
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
  AuthorizationScopes?: Array<string>;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens.</p>
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
  export function isa(o: any): o is CreateRouteResult {
    return _smithy.isa(o, "CreateRouteResult");
  }
}

/**
 * <p>Creates a new Stage resource to represent a stage.</p>
 */
export interface CreateStageRequest {
  __type?: "CreateStageRequest";
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
   * <p>A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+. Supported only for WebSocket APIs.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateStageRequest {
  export function isa(o: any): o is CreateStageRequest {
    return _smithy.isa(o, "CreateStageRequest");
  }
}

export interface CreateStageResponse extends $MetadataBearer {
  __type?: "CreateStageResponse";
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
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+. Supported only for WebSocket APIs.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateStageResponse {
  export function isa(o: any): o is CreateStageResponse {
    return _smithy.isa(o, "CreateStageResponse");
  }
}

export interface DeleteApiMappingRequest {
  __type?: "DeleteApiMappingRequest";
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
  export function isa(o: any): o is DeleteApiMappingRequest {
    return _smithy.isa(o, "DeleteApiMappingRequest");
  }
}

export interface DeleteApiRequest {
  __type?: "DeleteApiRequest";
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace DeleteApiRequest {
  export function isa(o: any): o is DeleteApiRequest {
    return _smithy.isa(o, "DeleteApiRequest");
  }
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
  export function isa(o: any): o is DeleteAuthorizerRequest {
    return _smithy.isa(o, "DeleteAuthorizerRequest");
  }
}

export interface DeleteCorsConfigurationRequest {
  __type?: "DeleteCorsConfigurationRequest";
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace DeleteCorsConfigurationRequest {
  export function isa(o: any): o is DeleteCorsConfigurationRequest {
    return _smithy.isa(o, "DeleteCorsConfigurationRequest");
  }
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
  export function isa(o: any): o is DeleteDeploymentRequest {
    return _smithy.isa(o, "DeleteDeploymentRequest");
  }
}

export interface DeleteDomainNameRequest {
  __type?: "DeleteDomainNameRequest";
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;
}

export namespace DeleteDomainNameRequest {
  export function isa(o: any): o is DeleteDomainNameRequest {
    return _smithy.isa(o, "DeleteDomainNameRequest");
  }
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
  export function isa(o: any): o is DeleteIntegrationRequest {
    return _smithy.isa(o, "DeleteIntegrationRequest");
  }
}

export interface DeleteIntegrationResponseRequest {
  __type?: "DeleteIntegrationResponseRequest";
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
  export function isa(o: any): o is DeleteIntegrationResponseRequest {
    return _smithy.isa(o, "DeleteIntegrationResponseRequest");
  }
}

export interface DeleteModelRequest {
  __type?: "DeleteModelRequest";
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
  export function isa(o: any): o is DeleteModelRequest {
    return _smithy.isa(o, "DeleteModelRequest");
  }
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
  export function isa(o: any): o is DeleteRouteRequest {
    return _smithy.isa(o, "DeleteRouteRequest");
  }
}

export interface DeleteRouteResponseRequest {
  __type?: "DeleteRouteResponseRequest";
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
  export function isa(o: any): o is DeleteRouteResponseRequest {
    return _smithy.isa(o, "DeleteRouteResponseRequest");
  }
}

export interface DeleteRouteSettingsRequest {
  __type?: "DeleteRouteSettingsRequest";
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
  export function isa(o: any): o is DeleteRouteSettingsRequest {
    return _smithy.isa(o, "DeleteRouteSettingsRequest");
  }
}

export interface DeleteStageRequest {
  __type?: "DeleteStageRequest";
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
  export function isa(o: any): o is DeleteStageRequest {
    return _smithy.isa(o, "DeleteStageRequest");
  }
}

/**
 * <p>An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet.</p>
 */
export interface Deployment {
  __type?: "Deployment";
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
  export function isa(o: any): o is Deployment {
    return _smithy.isa(o, "Deployment");
  }
}

export enum DeploymentStatus {
  DEPLOYED = "DEPLOYED",
  FAILED = "FAILED",
  PENDING = "PENDING"
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
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: Array<DomainNameConfiguration>;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace DomainName {
  export function isa(o: any): o is DomainName {
    return _smithy.isa(o, "DomainName");
  }
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
   * <p>The status of the domain name migration. The valid values are AVAILABLE and UPDATING. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated.</p>
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
}

export namespace DomainNameConfiguration {
  export function isa(o: any): o is DomainNameConfiguration {
    return _smithy.isa(o, "DomainNameConfiguration");
  }
}

export enum DomainNameStatus {
  AVAILABLE = "AVAILABLE",
  UPDATING = "UPDATING"
}

export enum EndpointType {
  EDGE = "EDGE",
  REGIONAL = "REGIONAL"
}

export interface GetApiMappingRequest {
  __type?: "GetApiMappingRequest";
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
  export function isa(o: any): o is GetApiMappingRequest {
    return _smithy.isa(o, "GetApiMappingRequest");
  }
}

export interface GetApiMappingResponse extends $MetadataBearer {
  __type?: "GetApiMappingResponse";
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
  export function isa(o: any): o is GetApiMappingResponse {
    return _smithy.isa(o, "GetApiMappingResponse");
  }
}

export interface GetApiMappingsRequest {
  __type?: "GetApiMappingsRequest";
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
  export function isa(o: any): o is GetApiMappingsRequest {
    return _smithy.isa(o, "GetApiMappingsRequest");
  }
}

export interface GetApiMappingsResponse extends $MetadataBearer {
  __type?: "GetApiMappingsResponse";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<ApiMapping>;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetApiMappingsResponse {
  export function isa(o: any): o is GetApiMappingsResponse {
    return _smithy.isa(o, "GetApiMappingsResponse");
  }
}

export interface GetApiRequest {
  __type?: "GetApiRequest";
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

export namespace GetApiRequest {
  export function isa(o: any): o is GetApiRequest {
    return _smithy.isa(o, "GetApiRequest");
  }
}

export interface GetApiResponse extends $MetadataBearer {
  __type?: "GetApiResponse";
  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

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
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: Array<string>;

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
  Warnings?: Array<string>;
}

export namespace GetApiResponse {
  export function isa(o: any): o is GetApiResponse {
    return _smithy.isa(o, "GetApiResponse");
  }
}

export interface GetApisRequest {
  __type?: "GetApisRequest";
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
  export function isa(o: any): o is GetApisRequest {
    return _smithy.isa(o, "GetApisRequest");
  }
}

export interface GetApisResponse extends $MetadataBearer {
  __type?: "GetApisResponse";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<Api>;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetApisResponse {
  export function isa(o: any): o is GetApisResponse {
    return _smithy.isa(o, "GetApisResponse");
  }
}

export interface GetAuthorizerRequest {
  __type?: "GetAuthorizerRequest";
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
  export function isa(o: any): o is GetAuthorizerRequest {
    return _smithy.isa(o, "GetAuthorizerRequest");
  }
}

export interface GetAuthorizerResponse extends $MetadataBearer {
  __type?: "GetAuthorizerResponse";
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>Authorizer caching is not currently supported. Don't specify this value for authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). ForREQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. Currently, the identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name. These parameters will be used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example "$request.header.Authorization".</p>
   */
  IdentitySource?: Array<string>;

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
  export function isa(o: any): o is GetAuthorizerResponse {
    return _smithy.isa(o, "GetAuthorizerResponse");
  }
}

export interface GetAuthorizersRequest {
  __type?: "GetAuthorizersRequest";
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
  export function isa(o: any): o is GetAuthorizersRequest {
    return _smithy.isa(o, "GetAuthorizersRequest");
  }
}

export interface GetAuthorizersResponse extends $MetadataBearer {
  __type?: "GetAuthorizersResponse";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<Authorizer>;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetAuthorizersResponse {
  export function isa(o: any): o is GetAuthorizersResponse {
    return _smithy.isa(o, "GetAuthorizersResponse");
  }
}

export interface GetDeploymentRequest {
  __type?: "GetDeploymentRequest";
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
  export function isa(o: any): o is GetDeploymentRequest {
    return _smithy.isa(o, "GetDeploymentRequest");
  }
}

export interface GetDeploymentResponse extends $MetadataBearer {
  __type?: "GetDeploymentResponse";
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
  export function isa(o: any): o is GetDeploymentResponse {
    return _smithy.isa(o, "GetDeploymentResponse");
  }
}

export interface GetDeploymentsRequest {
  __type?: "GetDeploymentsRequest";
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
  export function isa(o: any): o is GetDeploymentsRequest {
    return _smithy.isa(o, "GetDeploymentsRequest");
  }
}

export interface GetDeploymentsResponse extends $MetadataBearer {
  __type?: "GetDeploymentsResponse";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<Deployment>;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetDeploymentsResponse {
  export function isa(o: any): o is GetDeploymentsResponse {
    return _smithy.isa(o, "GetDeploymentsResponse");
  }
}

export interface GetDomainNameRequest {
  __type?: "GetDomainNameRequest";
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;
}

export namespace GetDomainNameRequest {
  export function isa(o: any): o is GetDomainNameRequest {
    return _smithy.isa(o, "GetDomainNameRequest");
  }
}

export interface GetDomainNameResponse extends $MetadataBearer {
  __type?: "GetDomainNameResponse";
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
  DomainNameConfigurations?: Array<DomainNameConfiguration>;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetDomainNameResponse {
  export function isa(o: any): o is GetDomainNameResponse {
    return _smithy.isa(o, "GetDomainNameResponse");
  }
}

export interface GetDomainNamesRequest {
  __type?: "GetDomainNamesRequest";
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
  export function isa(o: any): o is GetDomainNamesRequest {
    return _smithy.isa(o, "GetDomainNamesRequest");
  }
}

export interface GetDomainNamesResponse extends $MetadataBearer {
  __type?: "GetDomainNamesResponse";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<DomainName>;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetDomainNamesResponse {
  export function isa(o: any): o is GetDomainNamesResponse {
    return _smithy.isa(o, "GetDomainNamesResponse");
  }
}

export interface GetIntegrationRequest {
  __type?: "GetIntegrationRequest";
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
  export function isa(o: any): o is GetIntegrationRequest {
    return _smithy.isa(o, "GetIntegrationRequest");
  }
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
  export function isa(o: any): o is GetIntegrationResponseRequest {
    return _smithy.isa(o, "GetIntegrationResponseRequest");
  }
}

export interface GetIntegrationResponseResponse extends $MetadataBearer {
  __type?: "GetIntegrationResponseResponse";
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
  export function isa(o: any): o is GetIntegrationResponseResponse {
    return _smithy.isa(o, "GetIntegrationResponseResponse");
  }
}

export interface GetIntegrationResponsesRequest {
  __type?: "GetIntegrationResponsesRequest";
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
  export function isa(o: any): o is GetIntegrationResponsesRequest {
    return _smithy.isa(o, "GetIntegrationResponsesRequest");
  }
}

export interface GetIntegrationResponsesResponse extends $MetadataBearer {
  __type?: "GetIntegrationResponsesResponse";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<IntegrationResponse>;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetIntegrationResponsesResponse {
  export function isa(o: any): o is GetIntegrationResponsesResponse {
    return _smithy.isa(o, "GetIntegrationResponsesResponse");
  }
}

export interface GetIntegrationResult extends $MetadataBearer {
  __type?: "GetIntegrationResult";
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The connection ID.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Currently the only valid value is INTERNET, for connections through the public routable internet.</p>
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
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with the Lambda function-invoking action with the client request passed through as-is. This integration is also referred to as Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda proxy integration, this is the URI of the Lambda function.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs. Currently, the only supported value is 1.0.</p>
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
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds for WebSocket APIs. The default value is 5,000 milliseconds, or 5 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;
}

export namespace GetIntegrationResult {
  export function isa(o: any): o is GetIntegrationResult {
    return _smithy.isa(o, "GetIntegrationResult");
  }
}

export interface GetIntegrationsRequest {
  __type?: "GetIntegrationsRequest";
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
  export function isa(o: any): o is GetIntegrationsRequest {
    return _smithy.isa(o, "GetIntegrationsRequest");
  }
}

export interface GetIntegrationsResponse extends $MetadataBearer {
  __type?: "GetIntegrationsResponse";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<Integration>;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetIntegrationsResponse {
  export function isa(o: any): o is GetIntegrationsResponse {
    return _smithy.isa(o, "GetIntegrationsResponse");
  }
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
  export function isa(o: any): o is GetModelRequest {
    return _smithy.isa(o, "GetModelRequest");
  }
}

export interface GetModelResponse extends $MetadataBearer {
  __type?: "GetModelResponse";
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
  export function isa(o: any): o is GetModelResponse {
    return _smithy.isa(o, "GetModelResponse");
  }
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
  export function isa(o: any): o is GetModelTemplateRequest {
    return _smithy.isa(o, "GetModelTemplateRequest");
  }
}

export interface GetModelTemplateResponse extends $MetadataBearer {
  __type?: "GetModelTemplateResponse";
  /**
   * <p>The template value.</p>
   */
  Value?: string;
}

export namespace GetModelTemplateResponse {
  export function isa(o: any): o is GetModelTemplateResponse {
    return _smithy.isa(o, "GetModelTemplateResponse");
  }
}

export interface GetModelsRequest {
  __type?: "GetModelsRequest";
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
  export function isa(o: any): o is GetModelsRequest {
    return _smithy.isa(o, "GetModelsRequest");
  }
}

export interface GetModelsResponse extends $MetadataBearer {
  __type?: "GetModelsResponse";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<Model>;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetModelsResponse {
  export function isa(o: any): o is GetModelsResponse {
    return _smithy.isa(o, "GetModelsResponse");
  }
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
  export function isa(o: any): o is GetRouteRequest {
    return _smithy.isa(o, "GetRouteRequest");
  }
}

export interface GetRouteResponseRequest {
  __type?: "GetRouteResponseRequest";
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
  export function isa(o: any): o is GetRouteResponseRequest {
    return _smithy.isa(o, "GetRouteResponseRequest");
  }
}

export interface GetRouteResponseResponse extends $MetadataBearer {
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
  export function isa(o: any): o is GetRouteResponseResponse {
    return _smithy.isa(o, "GetRouteResponseResponse");
  }
}

export interface GetRouteResponsesRequest {
  __type?: "GetRouteResponsesRequest";
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
  export function isa(o: any): o is GetRouteResponsesRequest {
    return _smithy.isa(o, "GetRouteResponsesRequest");
  }
}

export interface GetRouteResponsesResponse extends $MetadataBearer {
  __type?: "GetRouteResponsesResponse";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<RouteResponse>;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetRouteResponsesResponse {
  export function isa(o: any): o is GetRouteResponsesResponse {
    return _smithy.isa(o, "GetRouteResponsesResponse");
  }
}

export interface GetRouteResult extends $MetadataBearer {
  __type?: "GetRouteResult";
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
  AuthorizationScopes?: Array<string>;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens.</p>
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
  export function isa(o: any): o is GetRouteResult {
    return _smithy.isa(o, "GetRouteResult");
  }
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
  export function isa(o: any): o is GetRoutesRequest {
    return _smithy.isa(o, "GetRoutesRequest");
  }
}

export interface GetRoutesResponse extends $MetadataBearer {
  __type?: "GetRoutesResponse";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<Route>;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetRoutesResponse {
  export function isa(o: any): o is GetRoutesResponse {
    return _smithy.isa(o, "GetRoutesResponse");
  }
}

export interface GetStageRequest {
  __type?: "GetStageRequest";
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
  export function isa(o: any): o is GetStageRequest {
    return _smithy.isa(o, "GetStageRequest");
  }
}

export interface GetStageResponse extends $MetadataBearer {
  __type?: "GetStageResponse";
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
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+. Supported only for WebSocket APIs.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetStageResponse {
  export function isa(o: any): o is GetStageResponse {
    return _smithy.isa(o, "GetStageResponse");
  }
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
  export function isa(o: any): o is GetStagesRequest {
    return _smithy.isa(o, "GetStagesRequest");
  }
}

export interface GetStagesResponse extends $MetadataBearer {
  __type?: "GetStagesResponse";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<Stage>;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

export namespace GetStagesResponse {
  export function isa(o: any): o is GetStagesResponse {
    return _smithy.isa(o, "GetStagesResponse");
  }
}

export interface GetTagsRequest {
  __type?: "GetTagsRequest";
  /**
   * <p>The resource ARN for the tag.</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetTagsRequest {
  export function isa(o: any): o is GetTagsRequest {
    return _smithy.isa(o, "GetTagsRequest");
  }
}

export interface GetTagsResponse extends $MetadataBearer {
  __type?: "GetTagsResponse";
  /**
   * <p>Represents a collection of tags associated with the resource.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace GetTagsResponse {
  export function isa(o: any): o is GetTagsResponse {
    return _smithy.isa(o, "GetTagsResponse");
  }
}

/**
 * <p></p>
 */
export interface ImportApiRequest {
  __type?: "ImportApiRequest";
  /**
   * <p>Represents the base path of the imported API. Supported only for HTTP APIs.</p>
   */
  Basepath?: string;

  /**
   * <p>The OpenAPI definition. Supported only for HTTP APIs.</p>
   */
  Body: string | undefined;

  /**
   * <p>Specifies whether to rollback the API creation (true) or not (false) when a warning is encountered. The default value is false.</p>
   */
  FailOnWarnings?: boolean;
}

export namespace ImportApiRequest {
  export function isa(o: any): o is ImportApiRequest {
    return _smithy.isa(o, "ImportApiRequest");
  }
}

export interface ImportApiResponse extends $MetadataBearer {
  __type?: "ImportApiResponse";
  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

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
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: Array<string>;

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
  Warnings?: Array<string>;
}

export namespace ImportApiResponse {
  export function isa(o: any): o is ImportApiResponse {
    return _smithy.isa(o, "ImportApiResponse");
  }
}

/**
 * <p>Represents an integration.</p>
 */
export interface Integration {
  __type?: "Integration";
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The connection ID.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Currently the only valid value is INTERNET, for connections through the public routable internet.</p>
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
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with the Lambda function-invoking action with the client request passed through as-is. This integration is also referred to as Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda proxy integration, this is the URI of the Lambda function.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs. Currently, the only supported value is 1.0.</p>
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
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds for WebSocket APIs. The default value is 5,000 milliseconds, or 5 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;
}

export namespace Integration {
  export function isa(o: any): o is Integration {
    return _smithy.isa(o, "Integration");
  }
}

/**
 * <p>Represents an integration response.</p>
 */
export interface IntegrationResponse {
  __type?: "IntegrationResponse";
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
  export function isa(o: any): o is IntegrationResponse {
    return _smithy.isa(o, "IntegrationResponse");
  }
}

export enum IntegrationType {
  AWS = "AWS",
  AWS_PROXY = "AWS_PROXY",
  HTTP = "HTTP",
  HTTP_PROXY = "HTTP_PROXY",
  MOCK = "MOCK"
}

/**
 * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
 */
export interface JWTConfiguration {
  __type?: "JWTConfiguration";
  /**
   * <p>A list of the intended recipients of the JWT. A valid JWT must provide an aud that matches at least one entry in this list. See <a href="https://tools.ietf.org/html/rfc7519#section-4.1.3">RFC 7519</a>. Supported only for HTTP APIs.</p>
   */
  Audience?: Array<string>;

  /**
   * <p>The base domain of the identity provider that issues JSON Web Tokens. For example, an Amazon Cognito user pool has the following format: https://cognito-idp.<replaceable>{region}</replaceable>.amazonaws.com/<replaceable>{userPoolId}</replaceable>
   *                . Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  Issuer?: string;
}

export namespace JWTConfiguration {
  export function isa(o: any): o is JWTConfiguration {
    return _smithy.isa(o, "JWTConfiguration");
  }
}

export enum LoggingLevel {
  ERROR = "ERROR",
  INFO = "INFO",
  false = "false"
}

/**
 * <p>Represents a data model for an API. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response Mappings</a>.</p>
 */
export interface Model {
  __type?: "Model";
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
  export function isa(o: any): o is Model {
    return _smithy.isa(o, "Model");
  }
}

/**
 * <p>The resource specified in the request was not found. See the message field for more information.</p>
 */
export interface NotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
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
  export function isa(o: any): o is NotFoundException {
    return _smithy.isa(o, "NotFoundException");
  }
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
  export function isa(o: any): o is ParameterConstraints {
    return _smithy.isa(o, "ParameterConstraints");
  }
}

export enum PassthroughBehavior {
  NEVER = "NEVER",
  WHEN_NO_MATCH = "WHEN_NO_MATCH",
  WHEN_NO_TEMPLATES = "WHEN_NO_TEMPLATES"
}

export enum ProtocolType {
  HTTP = "HTTP",
  WEBSOCKET = "WEBSOCKET"
}

/**
 * <p></p>
 */
export interface ReimportApiRequest {
  __type?: "ReimportApiRequest";
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Represents the base path of the imported API. Supported only for HTTP APIs.</p>
   */
  Basepath?: string;

  /**
   * <p>The OpenAPI definition. Supported only for HTTP APIs.</p>
   */
  Body: string | undefined;

  /**
   * <p>Specifies whether to rollback the API creation (true) or not (false) when a warning is encountered. The default value is false.</p>
   */
  FailOnWarnings?: boolean;
}

export namespace ReimportApiRequest {
  export function isa(o: any): o is ReimportApiRequest {
    return _smithy.isa(o, "ReimportApiRequest");
  }
}

export interface ReimportApiResponse extends $MetadataBearer {
  __type?: "ReimportApiResponse";
  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

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
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: Array<string>;

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
  Warnings?: Array<string>;
}

export namespace ReimportApiResponse {
  export function isa(o: any): o is ReimportApiResponse {
    return _smithy.isa(o, "ReimportApiResponse");
  }
}

/**
 * <p>Represents a route.</p>
 */
export interface Route {
  __type?: "Route";
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
  AuthorizationScopes?: Array<string>;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens.</p>
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
  export function isa(o: any): o is Route {
    return _smithy.isa(o, "Route");
  }
}

/**
 * <p>Represents a route response.</p>
 */
export interface RouteResponse {
  __type?: "RouteResponse";
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
  export function isa(o: any): o is RouteResponse {
    return _smithy.isa(o, "RouteResponse");
  }
}

/**
 * <p>Represents a collection of route settings.</p>
 */
export interface RouteSettings {
  __type?: "RouteSettings";
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
   * <p>Specifies the throttling burst limit. Supported only for WebSocket APIs.</p>
   */
  ThrottlingBurstLimit?: number;

  /**
   * <p>Specifies the throttling rate limit. Supported only for WebSocket APIs.</p>
   */
  ThrottlingRateLimit?: number;
}

export namespace RouteSettings {
  export function isa(o: any): o is RouteSettings {
    return _smithy.isa(o, "RouteSettings");
  }
}

export enum SecurityPolicy {
  TLS_1_0 = "TLS_1_0",
  TLS_1_2 = "TLS_1_2"
}

/**
 * <p>Represents an API stage.</p>
 */
export interface Stage {
  __type?: "Stage";
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
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+. Supported only for WebSocket APIs.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace Stage {
  export function isa(o: any): o is Stage {
    return _smithy.isa(o, "Stage");
  }
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
  export function isa(o: any): o is TagResourceRequest {
    return _smithy.isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse extends $MetadataBearer {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return _smithy.isa(o, "TagResourceResponse");
  }
}

/**
 * <p>A limit has been exceeded. See the accompanying error message for details.</p>
 */
export interface TooManyRequestsException
  extends _smithy.SmithyException,
    $MetadataBearer {
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
  export function isa(o: any): o is TooManyRequestsException {
    return _smithy.isa(o, "TooManyRequestsException");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The resource ARN for the tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The Tag keys to delete.</p>
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return _smithy.isa(o, "UntagResourceRequest");
  }
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
  export function isa(o: any): o is UpdateApiMappingRequest {
    return _smithy.isa(o, "UpdateApiMappingRequest");
  }
}

export interface UpdateApiMappingResponse extends $MetadataBearer {
  __type?: "UpdateApiMappingResponse";
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
  export function isa(o: any): o is UpdateApiMappingResponse {
    return _smithy.isa(o, "UpdateApiMappingResponse");
  }
}

/**
 * <p>Updates an Api.</p>
 */
export interface UpdateApiRequest {
  __type?: "UpdateApiRequest";
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
   * <p>This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null. Currently, this property is not used for HTTP integrations. If provided, this value replaces the credentials associated with the quick create integration. Supported only for HTTP APIs.</p>
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
  export function isa(o: any): o is UpdateApiRequest {
    return _smithy.isa(o, "UpdateApiRequest");
  }
}

export interface UpdateApiResponse extends $MetadataBearer {
  __type?: "UpdateApiResponse";
  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

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
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: Array<string>;

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
  Warnings?: Array<string>;
}

export namespace UpdateApiResponse {
  export function isa(o: any): o is UpdateApiResponse {
    return _smithy.isa(o, "UpdateApiResponse");
  }
}

/**
 * <p>Updates an Authorizer.</p>
 */
export interface UpdateAuthorizerRequest {
  __type?: "UpdateAuthorizerRequest";
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

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
   * <p>The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. Currently, the identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name. These parameters will be used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example "$request.header.Authorization".</p>
   */
  IdentitySource?: Array<string>;

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
  export function isa(o: any): o is UpdateAuthorizerRequest {
    return _smithy.isa(o, "UpdateAuthorizerRequest");
  }
}

export interface UpdateAuthorizerResponse extends $MetadataBearer {
  __type?: "UpdateAuthorizerResponse";
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>Authorizer caching is not currently supported. Don't specify this value for authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). ForREQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>
   *                , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. Currently, the identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name. These parameters will be used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example "$request.header.Authorization".</p>
   */
  IdentitySource?: Array<string>;

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
  export function isa(o: any): o is UpdateAuthorizerResponse {
    return _smithy.isa(o, "UpdateAuthorizerResponse");
  }
}

/**
 * <p>Updates a Deployment.</p>
 */
export interface UpdateDeploymentRequest {
  __type?: "UpdateDeploymentRequest";
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
  export function isa(o: any): o is UpdateDeploymentRequest {
    return _smithy.isa(o, "UpdateDeploymentRequest");
  }
}

export interface UpdateDeploymentResponse extends $MetadataBearer {
  __type?: "UpdateDeploymentResponse";
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
  export function isa(o: any): o is UpdateDeploymentResponse {
    return _smithy.isa(o, "UpdateDeploymentResponse");
  }
}

/**
 * <p>Updates a DomainName.</p>
 */
export interface UpdateDomainNameRequest {
  __type?: "UpdateDomainNameRequest";
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: Array<DomainNameConfiguration>;
}

export namespace UpdateDomainNameRequest {
  export function isa(o: any): o is UpdateDomainNameRequest {
    return _smithy.isa(o, "UpdateDomainNameRequest");
  }
}

export interface UpdateDomainNameResponse extends $MetadataBearer {
  __type?: "UpdateDomainNameResponse";
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
  DomainNameConfigurations?: Array<DomainNameConfiguration>;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateDomainNameResponse {
  export function isa(o: any): o is UpdateDomainNameResponse {
    return _smithy.isa(o, "UpdateDomainNameResponse");
  }
}

/**
 * <p>Updates an Integration.</p>
 */
export interface UpdateIntegrationRequest {
  __type?: "UpdateIntegrationRequest";
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The connection ID.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Currently the only valid value is INTERNET, for connections through the public routable internet.</p>
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
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with the Lambda function-invoking action with the client request passed through as-is. This integration is also referred to as Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda proxy integration, this is the URI of the Lambda function.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs. Currently, the only supported value is 1.0.</p>
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
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>The template selection expression for the integration.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds for WebSocket APIs. The default value is 5,000 milliseconds, or 5 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;
}

export namespace UpdateIntegrationRequest {
  export function isa(o: any): o is UpdateIntegrationRequest {
    return _smithy.isa(o, "UpdateIntegrationRequest");
  }
}

/**
 * <p>Updates an IntegrationResponses.</p>
 */
export interface UpdateIntegrationResponseRequest {
  __type?: "UpdateIntegrationResponseRequest";
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
  export function isa(o: any): o is UpdateIntegrationResponseRequest {
    return _smithy.isa(o, "UpdateIntegrationResponseRequest");
  }
}

export interface UpdateIntegrationResponseResponse extends $MetadataBearer {
  __type?: "UpdateIntegrationResponseResponse";
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
  export function isa(o: any): o is UpdateIntegrationResponseResponse {
    return _smithy.isa(o, "UpdateIntegrationResponseResponse");
  }
}

export interface UpdateIntegrationResult extends $MetadataBearer {
  __type?: "UpdateIntegrationResult";
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The connection ID.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Currently the only valid value is INTERNET, for connections through the public routable internet.</p>
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
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with the Lambda function-invoking action with the client request passed through as-is. This integration is also referred to as Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda proxy integration, this is the URI of the Lambda function.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs. Currently, the only supported value is 1.0.</p>
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
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds for WebSocket APIs. The default value is 5,000 milliseconds, or 5 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;
}

export namespace UpdateIntegrationResult {
  export function isa(o: any): o is UpdateIntegrationResult {
    return _smithy.isa(o, "UpdateIntegrationResult");
  }
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
  export function isa(o: any): o is UpdateModelRequest {
    return _smithy.isa(o, "UpdateModelRequest");
  }
}

export interface UpdateModelResponse extends $MetadataBearer {
  __type?: "UpdateModelResponse";
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
  export function isa(o: any): o is UpdateModelResponse {
    return _smithy.isa(o, "UpdateModelResponse");
  }
}

/**
 * <p>Updates a Route.</p>
 */
export interface UpdateRouteRequest {
  __type?: "UpdateRouteRequest";
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
  AuthorizationScopes?: Array<string>;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens.</p>
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
  export function isa(o: any): o is UpdateRouteRequest {
    return _smithy.isa(o, "UpdateRouteRequest");
  }
}

/**
 * <p>Updates a RouteResponse.</p>
 */
export interface UpdateRouteResponseRequest {
  __type?: "UpdateRouteResponseRequest";
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
  export function isa(o: any): o is UpdateRouteResponseRequest {
    return _smithy.isa(o, "UpdateRouteResponseRequest");
  }
}

export interface UpdateRouteResponseResponse extends $MetadataBearer {
  __type?: "UpdateRouteResponseResponse";
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
  export function isa(o: any): o is UpdateRouteResponseResponse {
    return _smithy.isa(o, "UpdateRouteResponseResponse");
  }
}

export interface UpdateRouteResult extends $MetadataBearer {
  __type?: "UpdateRouteResult";
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
  AuthorizationScopes?: Array<string>;

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens.</p>
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
  export function isa(o: any): o is UpdateRouteResult {
    return _smithy.isa(o, "UpdateRouteResult");
  }
}

/**
 * <p>Updates a Stage.</p>
 */
export interface UpdateStageRequest {
  __type?: "UpdateStageRequest";
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
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;

  /**
   * <p>A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+. Supported only for WebSocket APIs.</p>
   */
  StageVariables?: { [key: string]: string };
}

export namespace UpdateStageRequest {
  export function isa(o: any): o is UpdateStageRequest {
    return _smithy.isa(o, "UpdateStageRequest");
  }
}

export interface UpdateStageResponse extends $MetadataBearer {
  __type?: "UpdateStageResponse";
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
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+. Supported only for WebSocket APIs.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateStageResponse {
  export function isa(o: any): o is UpdateStageResponse {
    return _smithy.isa(o, "UpdateStageResponse");
  }
}
