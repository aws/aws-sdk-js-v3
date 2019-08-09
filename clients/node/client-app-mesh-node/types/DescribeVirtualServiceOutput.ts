import { _UnmarshalledVirtualServiceData } from "./_VirtualServiceData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVirtualServiceOutput shape
 */
export interface DescribeVirtualServiceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The full description of your virtual service.</p>
   */
  virtualService: _UnmarshalledVirtualServiceData;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
