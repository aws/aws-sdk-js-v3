import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>CreateApp</code> request.</p>
 */
export interface CreateAppOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
