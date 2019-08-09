import { _UnmarshalledActiveInstance } from "./_ActiveInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeSpotFleetInstances.</p>
 */
export interface DescribeSpotFleetInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The running instances. This list is refreshed periodically and might be out of date.</p>
   */
  ActiveInstances?: Array<_UnmarshalledActiveInstance>;

  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
