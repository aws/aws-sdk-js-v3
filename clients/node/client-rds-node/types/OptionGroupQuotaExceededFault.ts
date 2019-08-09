import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The quota of 20 option groups was exceeded for this AWS account.</p>
 */
export interface OptionGroupQuotaExceededFault
  extends __ServiceException__<_OptionGroupQuotaExceededFaultDetails> {
  name: "OptionGroupQuotaExceededFault";
}

export interface _OptionGroupQuotaExceededFaultDetails {}
