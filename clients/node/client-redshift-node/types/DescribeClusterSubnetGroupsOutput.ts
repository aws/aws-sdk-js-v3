import { _UnmarshalledClusterSubnetGroup } from "./_ClusterSubnetGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output from the <a>DescribeClusterSubnetGroups</a> action. </p>
 */
export interface DescribeClusterSubnetGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the <code>Marker</code> parameter and retrying the command. If the <code>Marker</code> field is empty, all response records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <a>ClusterSubnetGroup</a> instances. </p>
   */
  ClusterSubnetGroups?: Array<_UnmarshalledClusterSubnetGroup>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
