import { _UnmarshalledDataset } from "./_Dataset";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDatasetOutput shape
 */
export interface DescribeDatasetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains information about the data set.</p>
   */
  dataset?: _UnmarshalledDataset;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
