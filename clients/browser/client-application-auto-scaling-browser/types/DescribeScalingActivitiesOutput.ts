import { _UnmarshalledScalingActivity } from "./_ScalingActivity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeScalingActivitiesOutput shape
 */
export interface DescribeScalingActivitiesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of scaling activity objects.</p>
   */
  ScalingActivities?: Array<_UnmarshalledScalingActivity>;

  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
