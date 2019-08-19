import { _UnmarshalledDatasetSummary } from "./_DatasetSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDatasetsOutput shape
 */
export interface ListDatasetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of "DatasetSummary" objects.</p>
   */
  datasetSummaries?: Array<_UnmarshalledDatasetSummary>;

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
