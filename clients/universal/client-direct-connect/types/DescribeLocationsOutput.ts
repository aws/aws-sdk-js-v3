import { _UnmarshalledLocation } from "./_Location";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeLocationsOutput shape
 */
export interface DescribeLocationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The locations.</p>
   */
  locations?: Array<_UnmarshalledLocation>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
