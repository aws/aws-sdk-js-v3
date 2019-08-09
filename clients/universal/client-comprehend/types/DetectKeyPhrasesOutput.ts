import { _UnmarshalledKeyPhrase } from "./_KeyPhrase";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetectKeyPhrasesOutput shape
 */
export interface DetectKeyPhrasesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A collection of key phrases that Amazon Comprehend identified in the input text. For each key phrase, the response provides the text of the key phrase, where the key phrase begins and ends, and the level of confidence that Amazon Comprehend has in the accuracy of the detection. </p>
   */
  KeyPhrases?: Array<_UnmarshalledKeyPhrase>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
