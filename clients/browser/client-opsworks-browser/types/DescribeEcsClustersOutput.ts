import { _UnmarshalledEcsCluster } from "./_EcsCluster";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeEcsClusters</code> request.</p>
 */
export interface DescribeEcsClustersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>EcsCluster</code> objects containing the cluster descriptions.</p>
   */
  EcsClusters?: Array<_UnmarshalledEcsCluster>;

  /**
   * <p>If a paginated request does not return all of the remaining results, this parameter is set to a token that you can assign to the request object's <code>NextToken</code> parameter to retrieve the next set of results. If the previous paginated request returned all of the remaining results, this parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
