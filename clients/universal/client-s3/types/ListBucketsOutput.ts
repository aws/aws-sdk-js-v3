import { _UnmarshalledBucket } from "./_Bucket";
import { _UnmarshalledOwner } from "./_Owner";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBucketsOutput shape
 */
export interface ListBucketsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  Buckets?: Array<_UnmarshalledBucket>;

  /**
   * <p/>
   */
  Owner?: _UnmarshalledOwner;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
