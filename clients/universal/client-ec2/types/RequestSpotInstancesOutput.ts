import { _UnmarshalledSpotInstanceRequest } from "./_SpotInstanceRequest";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of RequestSpotInstances.</p>
 */
export interface RequestSpotInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>One or more Spot Instance requests.</p>
   */
  SpotInstanceRequests?: Array<_UnmarshalledSpotInstanceRequest>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
