import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The option group you are trying to create already exists.</p>
 */
export interface OptionGroupAlreadyExistsFault
  extends __ServiceException__<_OptionGroupAlreadyExistsFaultDetails> {
  name: "OptionGroupAlreadyExistsFault";
}

export interface _OptionGroupAlreadyExistsFaultDetails {}
