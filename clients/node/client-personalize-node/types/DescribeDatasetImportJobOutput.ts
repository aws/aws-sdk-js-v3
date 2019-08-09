import { _UnmarshalledDatasetImportJob } from "./_DatasetImportJob";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDatasetImportJobOutput shape
 */
export interface DescribeDatasetImportJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the dataset import job, including the status.</p> <p>The status is one of the following values:</p> <ul> <li> <p>CREATE PENDING</p> </li> <li> <p>CREATE IN_PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> </ul>
   */
  datasetImportJob?: _UnmarshalledDatasetImportJob;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
