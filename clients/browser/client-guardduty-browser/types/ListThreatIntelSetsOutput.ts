import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListThreatIntelSetsOutput shape
 */
export interface ListThreatIntelSetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The IDs of the ThreatIntelSet resources.</p>
   */
  ThreatIntelSetIds: Array<string>;

  /**
   * <p>Pagination parameter to be used on the next list operation to retrieve more items.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
