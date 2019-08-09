import { _UnmarshalledDatasetImportJobSummary } from "./_DatasetImportJobSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDatasetImportJobsOutput shape
 */
export interface ListDatasetImportJobsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of dataset import jobs.</p>
   */
  datasetImportJobs?: Array<_UnmarshalledDatasetImportJobSummary>;

  /**
   * <p>A token for getting the next set of dataset import jobs (if they exist).</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
