import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A policy with the specified name already exists for this load balancer.</p>
 */
export interface DuplicatePolicyNameException
  extends __ServiceException__<_DuplicatePolicyNameExceptionDetails> {
  name: "DuplicatePolicyNameException";
}

export interface _DuplicatePolicyNameExceptionDetails {}
