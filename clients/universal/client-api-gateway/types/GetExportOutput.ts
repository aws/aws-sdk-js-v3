import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The binary blob response to <a>GetExport</a>, which contains the generated SDK.</p>
 */
export interface GetExportOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The content-type header value in the HTTP response. This will correspond to a valid 'accept' type in the request.</p>
   */
  contentType?: string;

  /**
   * <p>The content-disposition header value in the HTTP response.</p>
   */
  contentDisposition?: string;

  /**
   * <p>The binary blob response to <a>GetExport</a>, which contains the export.</p>
   */
  body?: Uint8Array;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
