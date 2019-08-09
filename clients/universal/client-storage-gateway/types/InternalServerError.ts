import { _UnmarshalledStorageGatewayError } from "./_StorageGatewayError";
import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
 */
export interface InternalServerError
  extends __ServiceException__<_InternalServerErrorDetails> {
  name: "InternalServerError";
}

export interface _InternalServerErrorDetails {
  /**
   * <p>A human-readable message describing the error that occurred.</p>
   */
  message?: string;

  /**
   * <p>A <a>StorageGatewayError</a> that provides more information about the cause of the error.</p>
   */
  error?: _UnmarshalledStorageGatewayError;
}
