import { _UnmarshalledScalingPlanResource } from "./_ScalingPlanResource";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeScalingPlanResourcesOutput shape
 */
export interface DescribeScalingPlanResourcesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the scalable resources.</p>
   */
  ScalingPlanResources?: Array<_UnmarshalledScalingPlanResource>;

  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
