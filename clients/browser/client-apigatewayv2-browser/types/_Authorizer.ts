/**
 * <p>Represents an authorizer.</p>
 */
export interface _Authorizer {
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the
   *  authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon
   *  Resource Name (ARN). To use resource-based permissions on the Lambda function,
   *  specify null.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The time to live (TTL), in seconds, of cached authorizer results. If it equals 0,
   *  authorization caching is disabled. If it is greater than 0, API Gateway will cache
   *  authorizer responses. If this field is not set, the default value is 300. The maximum
   *  value is 3600, or 1 hour.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. Currently the only valid value is REQUEST, for a
   *  Lambda function using incoming request parameters.</p>
   */
  AuthorizerType?: "REQUEST" | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI).
   *  ForREQUEST authorizers, this must be a
   *  well-formed Lambda function URI, for example,
   *  arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations.
   *  In general, the URI has this form:
   *  arn:aws:apigateway:{region}:lambda:path/{service_api}
   *  , where {region} is the same as the region hosting the Lambda
   *  function, path indicates that the remaining substring in the URI should be treated as
   *  the path to the resource, including the initial /. For Lambda functions,
   *  this is usually of the form
   *  /2015-03-31/functions/[FunctionARN]/invocations.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>The identity source for which authorization is requested.</p><p>For the REQUEST authorizer, this is required when authorization
   *  caching is enabled. The value is a comma-separated string of one or more mapping
   *  expressions of the specified request parameters. For example, if an Auth
   *  header and a Name query string parameters are defined as identity
   *  sources, this value is method.request.header.Auth,
   *  method.request.querystring.Name. These parameters will be used to
   *  derive the authorization caching key and to perform runtime validation of the
   *  REQUEST authorizer by verifying all of the identity-related request
   *  parameters are present, not null, and non-empty. Only when this is true does the
   *  authorizer invoke the authorizer Lambda function, otherwise, it returns a 401
   *  Unauthorized response without calling the Lambda function. The valid value
   *  is a string of comma-separated mapping expressions of the specified request
   *  parameters. When the authorization caching is not enabled, this property is
   *  optional.</p>
   */
  IdentitySource?: Array<string> | Iterable<string>;

  /**
   * <p>The
   *  validation expression does not apply to the REQUEST authorizer.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name: string;

  /**
   * <p>For
   *  REQUEST authorizer, this is not
   *  defined.</p>
   */
  ProviderArns?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledAuthorizer extends _Authorizer {
  /**
   * <p>The identity source for which authorization is requested.</p><p>For the REQUEST authorizer, this is required when authorization
   *  caching is enabled. The value is a comma-separated string of one or more mapping
   *  expressions of the specified request parameters. For example, if an Auth
   *  header and a Name query string parameters are defined as identity
   *  sources, this value is method.request.header.Auth,
   *  method.request.querystring.Name. These parameters will be used to
   *  derive the authorization caching key and to perform runtime validation of the
   *  REQUEST authorizer by verifying all of the identity-related request
   *  parameters are present, not null, and non-empty. Only when this is true does the
   *  authorizer invoke the authorizer Lambda function, otherwise, it returns a 401
   *  Unauthorized response without calling the Lambda function. The valid value
   *  is a string of comma-separated mapping expressions of the specified request
   *  parameters. When the authorization caching is not enabled, this property is
   *  optional.</p>
   */
  IdentitySource?: Array<string>;

  /**
   * <p>For
   *  REQUEST authorizer, this is not
   *  defined.</p>
   */
  ProviderArns?: Array<string>;
}
