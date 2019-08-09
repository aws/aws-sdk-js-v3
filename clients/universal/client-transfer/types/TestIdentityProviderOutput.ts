import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TestIdentityProviderOutput shape
 */
export interface TestIdentityProviderOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The result of the authorization test as a message. </p>
   */
  Message?: string;

  /**
   * <p>The HTTP status code that is the response from your API Gateway.</p>
   */
  StatusCode: number;

  /**
   * <p>The endpoint of the service used to authenticate a user.</p>
   */
  Url: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
