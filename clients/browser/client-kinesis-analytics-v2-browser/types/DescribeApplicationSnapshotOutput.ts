import { _UnmarshalledSnapshotDetails } from "./_SnapshotDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeApplicationSnapshotOutput shape
 */
export interface DescribeApplicationSnapshotOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing information about the application snapshot.</p>
   */
  SnapshotDetails: _UnmarshalledSnapshotDetails;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
