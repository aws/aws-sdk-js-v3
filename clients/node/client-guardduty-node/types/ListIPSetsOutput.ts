import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListIPSetsOutput shape
 */
export interface ListIPSetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The IDs of the IPSet resources.</p>
   */
  IpSetIds: Array<string>;

  /**
   * <p>Pagination parameter to be used on the next list operation to retrieve more items.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
