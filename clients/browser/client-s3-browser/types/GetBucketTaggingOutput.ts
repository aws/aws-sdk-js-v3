import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBucketTaggingOutput shape
 */
export interface GetBucketTaggingOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  TagSet: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
