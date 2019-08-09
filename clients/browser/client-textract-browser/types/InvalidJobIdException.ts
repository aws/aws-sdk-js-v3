import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An invalid job identifier was passed to <a>GetDocumentAnalysis</a> or to <a>GetDocumentAnalysis</a>.</p>
 */
export interface InvalidJobIdException
  extends __ServiceException__<_InvalidJobIdExceptionDetails> {
  name: "InvalidJobIdException";
}

export interface _InvalidJobIdExceptionDetails {}
