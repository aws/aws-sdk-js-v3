import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
 */
export interface InternalServiceError
  extends __ServiceException__<_InternalServiceErrorDetails> {
  name: "InternalServiceError";
}

export interface _InternalServiceErrorDetails {
  /**
   * _Message shape
   */
  Message: string;
}
