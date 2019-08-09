import { _UnmarshalledClassicLinkDnsSupport } from "./_ClassicLinkDnsSupport";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVpcClassicLinkDnsSupportOutput shape
 */
export interface DescribeVpcClassicLinkDnsSupportOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the ClassicLink DNS support status of the VPCs.</p>
   */
  Vpcs?: Array<_UnmarshalledClassicLinkDnsSupport>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
