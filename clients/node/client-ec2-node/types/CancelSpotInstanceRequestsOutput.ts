import { _UnmarshalledCancelledSpotInstanceRequest } from "./_CancelledSpotInstanceRequest";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of CancelSpotInstanceRequests.</p>
 */
export interface CancelSpotInstanceRequestsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>One or more Spot Instance requests.</p>
   */
  CancelledSpotInstanceRequests?: Array<
    _UnmarshalledCancelledSpotInstanceRequest
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
