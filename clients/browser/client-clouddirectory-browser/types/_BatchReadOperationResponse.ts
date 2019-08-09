import {
  _BatchReadSuccessfulResponse,
  _UnmarshalledBatchReadSuccessfulResponse
} from "./_BatchReadSuccessfulResponse";
import {
  _BatchReadException,
  _UnmarshalledBatchReadException
} from "./_BatchReadException";

/**
 * <p>Represents the output of a <code>BatchRead</code> response operation.</p>
 */
export interface _BatchReadOperationResponse {
  /**
   * <p>Identifies which operation in a batch has succeeded.</p>
   */
  SuccessfulResponse?: _BatchReadSuccessfulResponse;

  /**
   * <p>Identifies which operation in a batch has failed.</p>
   */
  ExceptionResponse?: _BatchReadException;
}

export interface _UnmarshalledBatchReadOperationResponse
  extends _BatchReadOperationResponse {
  /**
   * <p>Identifies which operation in a batch has succeeded.</p>
   */
  SuccessfulResponse?: _UnmarshalledBatchReadSuccessfulResponse;

  /**
   * <p>Identifies which operation in a batch has failed.</p>
   */
  ExceptionResponse?: _UnmarshalledBatchReadException;
}
