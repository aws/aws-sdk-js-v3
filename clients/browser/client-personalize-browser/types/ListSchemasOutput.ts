import { _UnmarshalledDatasetSchemaSummary } from "./_DatasetSchemaSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSchemasOutput shape
 */
export interface ListSchemasOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of schemas.</p>
   */
  schemas?: Array<_UnmarshalledDatasetSchemaSummary>;

  /**
   * <p>A token used to get the next set of schemas (if they exist).</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
