import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A set of validation rules for incoming <a>Method</a> requests.</p> <div class="remarks"> <p>In OpenAPI, a <a>RequestValidator</a> of an API is defined by the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.requestValidator.html">x-amazon-apigateway-request-validators.requestValidator</a> object. It the referenced using the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validator">x-amazon-apigateway-request-validator</a> property.</p> </div> <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html">Enable Basic Request Validation in API Gateway</a></div>
 */
export interface UpdateRequestValidatorOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of this <a>RequestValidator</a>.</p>
   */
  id?: string;

  /**
   * <p>The name of this <a>RequestValidator</a></p>
   */
  name?: string;

  /**
   * <p>A Boolean flag to indicate whether to validate a request body according to the configured <a>Model</a> schema.</p>
   */
  validateRequestBody?: boolean;

  /**
   * <p>A Boolean flag to indicate whether to validate request parameters (<code>true</code>) or not (<code>false</code>).</p>
   */
  validateRequestParameters?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
