import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified blob does not exist.</p>
 */
export interface BlobIdDoesNotExistException
  extends __ServiceException__<_BlobIdDoesNotExistExceptionDetails> {
  name: "BlobIdDoesNotExistException";
}

export interface _BlobIdDoesNotExistExceptionDetails {}
