import { _UnmarshalledAvailabilityZone } from "./_AvailabilityZone";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SetSubnetsOutput shape
 */
export interface SetSubnetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the subnet and Availability Zone.</p>
   */
  AvailabilityZones?: Array<_UnmarshalledAvailabilityZone>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
