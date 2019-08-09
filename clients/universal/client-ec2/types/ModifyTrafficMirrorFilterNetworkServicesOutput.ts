import { _UnmarshalledTrafficMirrorFilter } from "./_TrafficMirrorFilter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyTrafficMirrorFilterNetworkServicesOutput shape
 */
export interface ModifyTrafficMirrorFilterNetworkServicesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Traffic Mirror filter that the network service is associated with.</p>
   */
  TrafficMirrorFilter?: _UnmarshalledTrafficMirrorFilter;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
