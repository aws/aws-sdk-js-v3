import { _UnmarshalledDevEndpoint } from "./_DevEndpoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDevEndpointOutput shape
 */
export interface GetDevEndpointOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <code>DevEndpoint</code> definition.</p>
   */
  DevEndpoint?: _UnmarshalledDevEndpoint;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
