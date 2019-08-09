import { _UnmarshalledVocabularyInfo } from "./_VocabularyInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListVocabulariesOutput shape
 */
export interface ListVocabulariesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The requested vocabulary state.</p>
   */
  Status?: "IN_PROGRESS" | "FAILED" | "COMPLETED" | string;

  /**
   * <p>The <code>ListVocabularies</code> operation returns a page of vocabularies at a time. The maximum size of the page is set by the <code>MaxResults</code> parameter. If there are more jobs in the list than the page size, Amazon Transcribe returns the <code>NextPage</code> token. Include the token in the next request to the <code>ListVocabularies</code> operation to return in the next page of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of objects that describe the vocabularies that match the search criteria in the request.</p>
   */
  Vocabularies?: Array<_UnmarshalledVocabularyInfo>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
