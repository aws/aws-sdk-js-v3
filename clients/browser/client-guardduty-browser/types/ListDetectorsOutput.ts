import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDetectorsOutput shape
 */
export interface ListDetectorsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of detector Ids.</p>
   */
  DetectorIds: Array<string>;

  /**
   * <p>Pagination parameter to be used on the next list operation to retrieve more items.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
