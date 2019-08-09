import { _UnmarshalledAuthorizer } from "./_Authorizer";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a collection of <a>Authorizer</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
 */
export interface GetAuthorizersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * _String shape
   */
  position?: string;

  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: Array<_UnmarshalledAuthorizer>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
