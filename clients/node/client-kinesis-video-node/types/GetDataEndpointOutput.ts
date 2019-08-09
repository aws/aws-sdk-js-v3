import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDataEndpointOutput shape
 */
export interface GetDataEndpointOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The endpoint value. To read data from the stream or to write data to it, specify this endpoint in your application.</p>
   */
  DataEndpoint?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
