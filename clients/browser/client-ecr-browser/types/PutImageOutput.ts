import { _UnmarshalledImage } from "./_Image";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutImageOutput shape
 */
export interface PutImageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Details of the image uploaded.</p>
   */
  image?: _UnmarshalledImage;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
