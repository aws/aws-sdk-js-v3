import { _UnmarshalledDataset } from "./_Dataset";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Returned for a successful ListDatasets request.
 */
export interface ListDatasetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * A set of datasets.
   */
  Datasets?: Array<_UnmarshalledDataset>;

  /**
   * Number of datasets returned.
   */
  Count?: number;

  /**
   * A pagination token for obtaining the next page of results.
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
