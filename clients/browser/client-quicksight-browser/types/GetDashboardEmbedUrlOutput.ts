import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDashboardEmbedUrlOutput shape
 */
export interface GetDashboardEmbedUrlOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>URL that you can put into your server-side webpage to embed your dashboard. This URL is valid for 5 minutes, and the resulting session is valid for 10 hours. The API provides the URL with an auth_code that enables a single-signon session. </p>
   */
  EmbedUrl?: string;

  /**
   * <p>The http status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
