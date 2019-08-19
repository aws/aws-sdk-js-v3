import { _UnmarshalledCompatibleImage } from "./_CompatibleImage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCompatibleImagesOutput shape
 */
export interface ListCompatibleImagesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A JSON-formatted object that describes a compatible AMI.</p>
   */
  CompatibleImages?: Array<_UnmarshalledCompatibleImage>;

  /**
   * <p>Because HTTP requests are stateless, this is the starting point for your next list of returned images.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
