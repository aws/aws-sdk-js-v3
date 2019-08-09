import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The format of the input document isn't supported. Amazon Textract supports documents that are .png or .jpg format.</p>
 */
export interface UnsupportedDocumentException
  extends __ServiceException__<_UnsupportedDocumentExceptionDetails> {
  name: "UnsupportedDocumentException";
}

export interface _UnsupportedDocumentExceptionDetails {}
