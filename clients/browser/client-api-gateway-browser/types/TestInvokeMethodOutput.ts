import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response of the test invoke request in the HTTP method.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-test-method.html#how-to-test-method-console">Test API using the API Gateway console</a> </div>
 */
export interface TestInvokeMethodOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The HTTP status code.</p>
   */
  status?: number;

  /**
   * <p>The body of the HTTP response.</p>
   */
  body?: string;

  /**
   * <p>The headers of the HTTP response.</p>
   */
  headers?: { [key: string]: string };

  /**
   * <p>The headers of the HTTP response as a map from string to list of values.</p>
   */
  multiValueHeaders?: { [key: string]: Array<string> };

  /**
   * <p>The API Gateway execution log for the test invoke request.</p>
   */
  log?: string;

  /**
   * <p>The execution latency of the test invoke request.</p>
   */
  latency?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
