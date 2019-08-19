import { _UnmarshalledCORSRule } from "./_CORSRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBucketCorsOutput shape
 */
export interface GetBucketCorsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  CORSRules?: Array<_UnmarshalledCORSRule>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
