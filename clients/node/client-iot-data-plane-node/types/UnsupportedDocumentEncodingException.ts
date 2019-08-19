import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The document encoding is not supported.</p>
 */
export interface UnsupportedDocumentEncodingException
  extends __ServiceException__<_UnsupportedDocumentEncodingExceptionDetails> {
  name: "UnsupportedDocumentEncodingException";
}

export interface _UnsupportedDocumentEncodingExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
