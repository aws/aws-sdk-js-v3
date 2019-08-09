import { _UnmarshalledRequestValidator } from "./_RequestValidator";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A collection of <a>RequestValidator</a> resources of a given <a>RestApi</a>.</p> <div class="remarks"> <p>In OpenAPI, the <a>RequestValidators</a> of an API is defined by the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.html">x-amazon-apigateway-request-validators</a> extension.</p> </div> <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html">Enable Basic Request Validation in API Gateway</a></div>
 */
export interface GetRequestValidatorsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * _String shape
   */
  position?: string;

  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: Array<_UnmarshalledRequestValidator>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
