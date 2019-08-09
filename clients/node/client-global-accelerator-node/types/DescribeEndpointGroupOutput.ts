import { _UnmarshalledEndpointGroup } from "./_EndpointGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEndpointGroupOutput shape
 */
export interface DescribeEndpointGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The description of an endpoint group.</p>
   */
  EndpointGroup?: _UnmarshalledEndpointGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
