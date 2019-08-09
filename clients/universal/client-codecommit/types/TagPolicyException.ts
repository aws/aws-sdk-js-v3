import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The tag policy is not valid.</p>
 */
export interface TagPolicyException
  extends __ServiceException__<_TagPolicyExceptionDetails> {
  name: "TagPolicyException";
}

export interface _TagPolicyExceptionDetails {}
