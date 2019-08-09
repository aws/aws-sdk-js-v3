import { _UnmarshalledImageIdentifier } from "./_ImageIdentifier";
import { _UnmarshalledImageFailure } from "./_ImageFailure";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchDeleteImageOutput shape
 */
export interface BatchDeleteImageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The image IDs of the deleted images.</p>
   */
  imageIds?: Array<_UnmarshalledImageIdentifier>;

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Array<_UnmarshalledImageFailure>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
