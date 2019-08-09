import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded the number of tags allowed.</p>
 */
export interface TagLimitExceededFault
  extends __ServiceException__<_TagLimitExceededFaultDetails> {
  name: "TagLimitExceededFault";
}

export interface _TagLimitExceededFaultDetails {}
