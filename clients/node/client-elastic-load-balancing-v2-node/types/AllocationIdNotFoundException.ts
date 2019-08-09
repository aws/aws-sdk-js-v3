import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified allocation ID does not exist.</p>
 */
export interface AllocationIdNotFoundException
  extends __ServiceException__<_AllocationIdNotFoundExceptionDetails> {
  name: "AllocationIdNotFoundException";
}

export interface _AllocationIdNotFoundExceptionDetails {}
