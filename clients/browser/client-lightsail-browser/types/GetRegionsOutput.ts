import { _UnmarshalledRegion } from "./_Region";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRegionsOutput shape
 */
export interface GetRegionsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about your get regions request.</p>
   */
  regions?: Array<_UnmarshalledRegion>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
