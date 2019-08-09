import { _UnmarshalledSpotInstanceRequest } from "./_SpotInstanceRequest";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeSpotInstanceRequests.</p>
 */
export interface DescribeSpotInstanceRequestsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>One or more Spot Instance requests.</p>
   */
  SpotInstanceRequests?: Array<_UnmarshalledSpotInstanceRequest>;

  /**
   * <p>The token to use to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
