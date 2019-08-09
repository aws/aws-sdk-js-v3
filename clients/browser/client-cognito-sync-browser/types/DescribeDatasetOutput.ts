import { _UnmarshalledDataset } from "./_Dataset";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Response to a successful DescribeDataset request.
 */
export interface DescribeDatasetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Meta data for a collection of data for an identity. An identity can have multiple datasets. A dataset can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.
   */
  Dataset?: _UnmarshalledDataset;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
