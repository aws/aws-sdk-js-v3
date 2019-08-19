import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The encryption key has exceeded its grant limit in AWS KMS.</p>
 */
export interface LimitExceededFault
  extends __ServiceException__<_LimitExceededFaultDetails> {
  name: "LimitExceededFault";
}

export interface _LimitExceededFaultDetails {}
