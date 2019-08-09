import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The designated option group could not be found.</p>
 */
export interface OptionGroupNotFoundFault
  extends __ServiceException__<_OptionGroupNotFoundFaultDetails> {
  name: "OptionGroupNotFoundFault";
}

export interface _OptionGroupNotFoundFaultDetails {}
