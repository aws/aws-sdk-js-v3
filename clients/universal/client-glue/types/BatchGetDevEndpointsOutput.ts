import { _UnmarshalledDevEndpoint } from "./_DevEndpoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetDevEndpointsOutput shape
 */
export interface BatchGetDevEndpointsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>DevEndpoint</code> definitions.</p>
   */
  DevEndpoints?: Array<_UnmarshalledDevEndpoint>;

  /**
   * <p>A list of <code>DevEndpoints</code> not found.</p>
   */
  DevEndpointsNotFound?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
