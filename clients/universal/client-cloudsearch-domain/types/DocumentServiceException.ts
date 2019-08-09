import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Information about any problems encountered while processing an upload request.</p>
 */
export interface DocumentServiceException
  extends __ServiceException__<_DocumentServiceExceptionDetails> {
  name: "DocumentServiceException";
}

export interface _DocumentServiceExceptionDetails {
  /**
   * <p>The return status of a document upload request, <code>error</code> or <code>success</code>.</p>
   */
  status?: string;

  /**
   * <p>The description of the errors returned by the document service.</p>
   */
  message?: string;
}
