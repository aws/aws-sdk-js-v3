import { _UnmarshalledAppliedTerminology } from "./_AppliedTerminology";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TranslateTextOutput shape
 */
export interface TranslateTextOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The the translated text. The maximum length of this text is 5kb.</p>
   */
  TranslatedText: string;

  /**
   * <p>The language code for the language of the source text. </p>
   */
  SourceLanguageCode: string;

  /**
   * <p>The language code for the language of the target text. </p>
   */
  TargetLanguageCode: string;

  /**
   * <p>The names of the custom terminologies applied to the input text by Amazon Translate for the translated text response.</p>
   */
  AppliedTerminologies?: Array<_UnmarshalledAppliedTerminology>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
