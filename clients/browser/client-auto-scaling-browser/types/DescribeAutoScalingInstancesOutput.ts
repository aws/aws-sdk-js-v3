import { _UnmarshalledAutoScalingInstanceDetails } from "./_AutoScalingInstanceDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAutoScalingInstancesOutput shape
 */
export interface DescribeAutoScalingInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The instances.</p>
   */
  AutoScalingInstances?: Array<_UnmarshalledAutoScalingInstanceDetails>;

  /**
   * <p>A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the <code>NextToken</code> value when requesting the next set of items. This value is null when there are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
