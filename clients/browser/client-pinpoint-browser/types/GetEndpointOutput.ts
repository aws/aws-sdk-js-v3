import { _UnmarshalledEndpointResponse } from "./_EndpointResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetEndpointOutput shape
 */
export interface GetEndpointOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about the channel type and other settings for an endpoint.</p>
   */
  EndpointResponse: _UnmarshalledEndpointResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
