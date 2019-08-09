import { _UnmarshalledStorageGatewayError } from "./_StorageGatewayError";
import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
 */
export interface InvalidGatewayRequestException
  extends __ServiceException__<_InvalidGatewayRequestExceptionDetails> {
  name: "InvalidGatewayRequestException";
}

export interface _InvalidGatewayRequestExceptionDetails {
  /**
   * <p>A human-readable message describing the error that occurred.</p>
   */
  message?: string;

  /**
   * <p>A <a>StorageGatewayError</a> that provides more detail about the cause of the error.</p>
   */
  error?: _UnmarshalledStorageGatewayError;
}
