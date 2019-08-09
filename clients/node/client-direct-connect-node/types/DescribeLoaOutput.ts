import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.</p>
 */
export interface DescribeLoaOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The binary contents of the LOA-CFA document.</p>
   */
  loaContent?: Uint8Array;

  /**
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   */
  loaContentType?: "application/pdf" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
