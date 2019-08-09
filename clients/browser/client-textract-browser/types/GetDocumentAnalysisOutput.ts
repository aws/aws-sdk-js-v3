import { _UnmarshalledDocumentMetadata } from "./_DocumentMetadata";
import { _UnmarshalledBlock } from "./_Block";
import { _UnmarshalledWarning } from "./_Warning";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDocumentAnalysisOutput shape
 */
export interface GetDocumentAnalysisOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about a document that Amazon Textract processed. <code>DocumentMetadata</code> is returned in every page of paginated responses from an Amazon Textract video operation.</p>
   */
  DocumentMetadata?: _UnmarshalledDocumentMetadata;

  /**
   * <p>The current status of the text detection job.</p>
   */
  JobStatus?:
    | "IN_PROGRESS"
    | "SUCCEEDED"
    | "FAILED"
    | "PARTIAL_SUCCESS"
    | string;

  /**
   * <p>If the response is truncated, Amazon Textract returns this token. You can use this token in the subsequent request to retrieve the next set of text detection results.</p>
   */
  NextToken?: string;

  /**
   * <p>The results of the text analysis operation.</p>
   */
  Blocks?: Array<_UnmarshalledBlock>;

  /**
   * <p>A list of warnings that occurred during the document analysis operation.</p>
   */
  Warnings?: Array<_UnmarshalledWarning>;

  /**
   * <p>The current status of an asynchronous document analysis operation.</p>
   */
  StatusMessage?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
