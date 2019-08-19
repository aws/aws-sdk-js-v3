import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAvailableManagementCidrRangesOutput shape
 */
export interface ListAvailableManagementCidrRangesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of available IP address ranges, specified as IPv4 CIDR blocks.</p>
   */
  ManagementCidrRanges?: Array<string>;

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are available.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
