import { _UnmarshalledVolume } from "./_Volume";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVolumesOutput shape
 */
export interface DescribeVolumesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the volumes.</p>
   */
  Volumes?: Array<_UnmarshalledVolume>;

  /**
   * <p>The <code>NextToken</code> value to include in a future <code>DescribeVolumes</code> request. When the results of a <code>DescribeVolumes</code> request exceed <code>MaxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
