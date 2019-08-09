import { _UnmarshalledVolumeStatusItem } from "./_VolumeStatusItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVolumeStatusOutput shape
 */
export interface DescribeVolumeStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the status of the volumes.</p>
   */
  VolumeStatuses?: Array<_UnmarshalledVolumeStatusItem>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
