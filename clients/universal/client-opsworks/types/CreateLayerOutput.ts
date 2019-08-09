import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>CreateLayer</code> request.</p>
 */
export interface CreateLayerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The layer ID.</p>
   */
  LayerId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
