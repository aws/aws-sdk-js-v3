import { _UnmarshalledRegion } from "./_Region";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRegionsOutput shape
 */
export interface DescribeRegionsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the Regions.</p>
   */
  Regions?: Array<_UnmarshalledRegion>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
