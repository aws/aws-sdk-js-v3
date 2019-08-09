import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The value of the "Text" parameter is longer than the accepted limits. For the <code>SynthesizeSpeech</code> API, the limit for input text is a maximum of 6000 characters total, of which no more than 3000 can be billed characters. For the <code>StartSpeechSynthesisTask</code> API, the maximum is 200,000 characters, of which no more than 100,000 can be billed characters. SSML tags are not counted as billed characters.</p>
 */
export interface TextLengthExceededException
  extends __ServiceException__<_TextLengthExceededExceptionDetails> {
  name: "TextLengthExceededException";
}

export interface _TextLengthExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
