import { _UnmarshalledDatasetGroup } from "./_DatasetGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDatasetGroupOutput shape
 */
export interface DescribeDatasetGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A listing of the dataset group's properties.</p>
   */
  datasetGroup?: _UnmarshalledDatasetGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
