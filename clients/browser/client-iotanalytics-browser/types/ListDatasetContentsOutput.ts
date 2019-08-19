import { _UnmarshalledDatasetContentSummary } from "./_DatasetContentSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDatasetContentsOutput shape
 */
export interface ListDatasetContentsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Summary information about data set contents that have been created.</p>
   */
  datasetContentSummaries?: Array<_UnmarshalledDatasetContentSummary>;

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
