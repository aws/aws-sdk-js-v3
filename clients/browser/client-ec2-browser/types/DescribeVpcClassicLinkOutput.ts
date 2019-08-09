import { _UnmarshalledVpcClassicLink } from "./_VpcClassicLink";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVpcClassicLinkOutput shape
 */
export interface DescribeVpcClassicLinkOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ClassicLink status of one or more VPCs.</p>
   */
  Vpcs?: Array<_UnmarshalledVpcClassicLink>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
