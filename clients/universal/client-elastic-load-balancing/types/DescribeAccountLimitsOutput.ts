import { _UnmarshalledLimit } from "./_Limit";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAccountLimitsOutput shape
 */
export interface DescribeAccountLimitsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the limits.</p>
   */
  Limits?: Array<_UnmarshalledLimit>;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
   */
  NextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
