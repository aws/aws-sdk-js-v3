import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your account is not authorized to perform the requested operation.</p>
 */
export interface UnauthorizedOperation
  extends __ServiceException__<_UnauthorizedOperationDetails> {
  name: "UnauthorizedOperation";
}

export interface _UnauthorizedOperationDetails {}
