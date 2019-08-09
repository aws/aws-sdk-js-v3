import { _UnmarshalledStorageGatewayError } from "./_StorageGatewayError";
import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An internal server error has occurred because the service is unavailable. For more information, see the error and message fields.</p>
 */
export interface ServiceUnavailableError
  extends __ServiceException__<_ServiceUnavailableErrorDetails> {
  name: "ServiceUnavailableError";
}

export interface _ServiceUnavailableErrorDetails {
  /**
   * <p>A human-readable message describing the error that occurred.</p>
   */
  message?: string;

  /**
   * <p>A <a>StorageGatewayError</a> that provides more information about the cause of the error.</p>
   */
  error?: _UnmarshalledStorageGatewayError;
}
