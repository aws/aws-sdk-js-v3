import { _UnmarshalledDatasetSummary } from "./_DatasetSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDatasetsOutput shape
 */
export interface ListDatasetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>Dataset</code> objects. Each object provides metadata information.</p>
   */
  datasets?: Array<_UnmarshalledDatasetSummary>;

  /**
   * <p>A token for getting the next set of datasets (if they exist).</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
