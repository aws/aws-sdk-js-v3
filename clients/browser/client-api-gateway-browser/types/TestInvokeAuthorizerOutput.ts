import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response of the test invoke request for a custom <a>Authorizer</a></p>
 */
export interface TestInvokeAuthorizerOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The HTTP status code that the client would have received. Value is 0 if the authorizer succeeded.</p>
   */
  clientStatus?: number;

  /**
   * <p>The API Gateway execution log for the test authorizer request.</p>
   */
  log?: string;

  /**
   * <p>The execution latency of the test authorizer request.</p>
   */
  latency?: number;

  /**
   * <p>The principal identity returned by the <a>Authorizer</a></p>
   */
  principalId?: string;

  /**
   * <p>The JSON policy document returned by the <a>Authorizer</a></p>
   */
  policy?: string;

  /**
   * _MapOfStringToList shape
   */
  authorization?: { [key: string]: Array<string> };

  /**
   * <p>The <a href="https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims">open identity claims</a>, with any supported custom attributes, returned from the Cognito Your User Pool configured for the API.</p>
   */
  claims?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
