import { _UnmarshalledLexiconDescription } from "./_LexiconDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListLexiconsOutput shape
 */
export interface ListLexiconsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of lexicon names and attributes.</p>
   */
  Lexicons?: Array<_UnmarshalledLexiconDescription>;

  /**
   * <p>The pagination token to use in the next request to continue the listing of lexicons. <code>NextToken</code> is returned only if the response is truncated.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
