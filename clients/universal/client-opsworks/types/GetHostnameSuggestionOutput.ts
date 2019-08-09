import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>GetHostnameSuggestion</code> request.</p>
 */
export interface GetHostnameSuggestionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The layer ID.</p>
   */
  LayerId?: string;

  /**
   * <p>The generated host name.</p>
   */
  Hostname?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
