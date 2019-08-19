import { _UnmarshalledSnapshot } from "./_Snapshot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSnapshotsOutput shape
 */
export interface DescribeSnapshotsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the snapshots.</p>
   */
  Snapshots?: Array<_UnmarshalledSnapshot>;

  /**
   * <p>The <code>NextToken</code> value to include in a future <code>DescribeSnapshots</code> request. When the results of a <code>DescribeSnapshots</code> request exceed <code>MaxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
