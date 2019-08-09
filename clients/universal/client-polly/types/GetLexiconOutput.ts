import { _UnmarshalledLexicon } from "./_Lexicon";
import { _UnmarshalledLexiconAttributes } from "./_LexiconAttributes";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLexiconOutput shape
 */
export interface GetLexiconOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Lexicon object that provides name and the string content of the lexicon. </p>
   */
  Lexicon?: _UnmarshalledLexicon;

  /**
   * <p>Metadata of the lexicon, including phonetic alphabetic used, language code, lexicon ARN, number of lexemes defined in the lexicon, and size of lexicon in bytes.</p>
   */
  LexiconAttributes?: _UnmarshalledLexiconAttributes;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
