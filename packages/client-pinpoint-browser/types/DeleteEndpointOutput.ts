import { _UnmarshalledEndpointResponse } from "./_EndpointResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteEndpointOutput shape
 */
export interface DeleteEndpointOutput {
  /**
   * Endpoint response
   */
  EndpointResponse: _UnmarshalledEndpointResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
