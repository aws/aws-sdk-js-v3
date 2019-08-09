import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You cannot specify an instance ID in more than one association.</p>
 */
export interface DuplicateInstanceId
  extends __ServiceException__<_DuplicateInstanceIdDetails> {
  name: "DuplicateInstanceId";
}

export interface _DuplicateInstanceIdDetails {}
