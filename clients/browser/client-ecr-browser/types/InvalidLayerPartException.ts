import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The layer part size is not valid, or the first byte specified is not consecutive to the last byte of a previous layer part upload.</p>
 */
export interface InvalidLayerPartException
  extends __ServiceException__<_InvalidLayerPartExceptionDetails> {
  name: "InvalidLayerPartException";
}

export interface _InvalidLayerPartExceptionDetails {
  /**
   * <p>The registry ID associated with the exception.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the exception.</p>
   */
  repositoryName?: string;

  /**
   * <p>The upload ID associated with the exception.</p>
   */
  uploadId?: string;

  /**
   * <p>The last valid byte received from the layer part upload that is associated with the exception.</p>
   */
  lastValidByteReceived?: number;

  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}
