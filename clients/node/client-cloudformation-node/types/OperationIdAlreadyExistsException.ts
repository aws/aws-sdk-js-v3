import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified operation ID already exists.</p>
 */
export interface OperationIdAlreadyExistsException
  extends __ServiceException__<_OperationIdAlreadyExistsExceptionDetails> {
  name: "OperationIdAlreadyExistsException";
}

export interface _OperationIdAlreadyExistsExceptionDetails {}
