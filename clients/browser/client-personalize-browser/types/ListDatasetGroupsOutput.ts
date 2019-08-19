import { _UnmarshalledDatasetGroupSummary } from "./_DatasetGroupSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDatasetGroupsOutput shape
 */
export interface ListDatasetGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of your dataset groups.</p>
   */
  datasetGroups?: Array<_UnmarshalledDatasetGroupSummary>;

  /**
   * <p>A token for getting the next set of dataset groups (if they exist).</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
