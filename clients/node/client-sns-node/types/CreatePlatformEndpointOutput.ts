import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Response from CreateEndpoint action.</p>
 */
export interface CreatePlatformEndpointOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>EndpointArn returned from CreateEndpoint action.</p>
   */
  EndpointArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
