import { _UnmarshalledTargetGroup } from "./_TargetGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTargetGroupsOutput shape
 */
export interface DescribeTargetGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the target groups.</p>
   */
  TargetGroups?: Array<_UnmarshalledTargetGroup>;

  /**
   * <p>If there are additional results, this is the marker for the next set of results. Otherwise, this is null.</p>
   */
  NextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
