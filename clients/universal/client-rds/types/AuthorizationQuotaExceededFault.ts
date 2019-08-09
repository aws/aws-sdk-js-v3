import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DB security group authorization quota has been reached.</p>
 */
export interface AuthorizationQuotaExceededFault
  extends __ServiceException__<_AuthorizationQuotaExceededFaultDetails> {
  name: "AuthorizationQuotaExceededFault";
}

export interface _AuthorizationQuotaExceededFaultDetails {}
