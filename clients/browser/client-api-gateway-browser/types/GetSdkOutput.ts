import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The binary blob response to <a>GetSdk</a>, which contains the generated SDK.</p>
 */
export interface GetSdkOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The content-type header value in the HTTP response.</p>
   */
  contentType?: string;

  /**
   * <p>The content-disposition header value in the HTTP response.</p>
   */
  contentDisposition?: string;

  /**
   * <p>The binary blob response to <a>GetSdk</a>, which contains the generated SDK.</p>
   */
  body?: Uint8Array;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
