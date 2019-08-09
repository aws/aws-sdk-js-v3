import { _UnmarshalledEndpointsResponse } from "./_EndpointsResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteUserEndpointsOutput shape
 */
export interface DeleteUserEndpointsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about all the endpoints that are associated with a user ID.</p>
   */
  EndpointsResponse: _UnmarshalledEndpointsResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
