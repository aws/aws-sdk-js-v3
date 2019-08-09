import { _UnmarshalledVirtualRouterData } from "./_VirtualRouterData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVirtualRouterOutput shape
 */
export interface DescribeVirtualRouterOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The full description of your virtual router.</p>
   */
  virtualRouter: _UnmarshalledVirtualRouterData;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
