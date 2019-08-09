import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The image does not support storage connectors.</p>
 */
export interface IncompatibleImageException
  extends __ServiceException__<_IncompatibleImageExceptionDetails> {
  name: "IncompatibleImageException";
}

export interface _IncompatibleImageExceptionDetails {
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}
