import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response from the GetCognitoEvents request</p>
 */
export interface GetCognitoEventsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Cognito Events returned from the GetCognitoEvents request</p>
   */
  Events?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
