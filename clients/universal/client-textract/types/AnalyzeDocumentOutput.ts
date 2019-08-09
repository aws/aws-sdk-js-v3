import { _UnmarshalledDocumentMetadata } from "./_DocumentMetadata";
import { _UnmarshalledBlock } from "./_Block";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AnalyzeDocumentOutput shape
 */
export interface AnalyzeDocumentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Metadata about the analyzed document. An example is the number of pages.</p>
   */
  DocumentMetadata?: _UnmarshalledDocumentMetadata;

  /**
   * <p>The text that's detected and analyzed by <code>AnalyzeDocument</code>.</p>
   */
  Blocks?: Array<_UnmarshalledBlock>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
