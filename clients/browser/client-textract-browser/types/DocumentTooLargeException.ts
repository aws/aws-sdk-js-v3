import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The document can't be processed because it's too large. The maximum document size for synchronous operations 5 MB. The maximum document size for asynchronous operations is 500 MB for PDF format files.</p>
 */
export interface DocumentTooLargeException
  extends __ServiceException__<_DocumentTooLargeExceptionDetails> {
  name: "DocumentTooLargeException";
}

export interface _DocumentTooLargeExceptionDetails {}
