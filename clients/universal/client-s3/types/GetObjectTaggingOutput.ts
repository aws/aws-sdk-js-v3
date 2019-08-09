import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetObjectTaggingOutput shape
 */
export interface GetObjectTaggingOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  VersionId?: string;

  /**
   * <p/>
   */
  TagSet: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
