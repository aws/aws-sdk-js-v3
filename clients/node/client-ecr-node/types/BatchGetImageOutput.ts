import { _UnmarshalledImage } from "./_Image";
import { _UnmarshalledImageFailure } from "./_ImageFailure";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetImageOutput shape
 */
export interface BatchGetImageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of image objects corresponding to the image references in the request.</p>
   */
  images?: Array<_UnmarshalledImage>;

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Array<_UnmarshalledImageFailure>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
