import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified load balancer name already exists for this account.</p>
 */
export interface DuplicateAccessPointNameException
  extends __ServiceException__<_DuplicateAccessPointNameExceptionDetails> {
  name: "DuplicateAccessPointNameException";
}

export interface _DuplicateAccessPointNameExceptionDetails {}
