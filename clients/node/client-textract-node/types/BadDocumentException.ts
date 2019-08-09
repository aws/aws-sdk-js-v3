import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Amazon Textract isn't able to read the document.</p>
 */
export interface BadDocumentException
  extends __ServiceException__<_BadDocumentExceptionDetails> {
  name: "BadDocumentException";
}

export interface _BadDocumentExceptionDetails {}
