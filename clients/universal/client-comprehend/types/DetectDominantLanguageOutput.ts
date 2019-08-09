import { _UnmarshalledDominantLanguage } from "./_DominantLanguage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetectDominantLanguageOutput shape
 */
export interface DetectDominantLanguageOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The languages that Amazon Comprehend detected in the input text. For each language, the response returns the RFC 5646 language code and the level of confidence that Amazon Comprehend has in the accuracy of its inference. For more information about RFC 5646, see <a href="https://tools.ietf.org/html/rfc5646">Tags for Identifying Languages</a> on the <i>IETF Tools</i> web site.</p>
   */
  Languages?: Array<_UnmarshalledDominantLanguage>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
