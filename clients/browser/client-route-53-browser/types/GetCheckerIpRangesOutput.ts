import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A complex type that contains the <code>CheckerIpRanges</code> element.</p>
 */
export interface GetCheckerIpRangesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complex type that contains sorted list of IP ranges in CIDR format for Amazon Route 53 health checkers.</p>
   */
  CheckerIpRanges: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
