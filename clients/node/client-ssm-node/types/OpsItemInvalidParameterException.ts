import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A specified parameter argument isn't valid. Verify the available arguments and try again.</p>
 */
export interface OpsItemInvalidParameterException
  extends __ServiceException__<_OpsItemInvalidParameterExceptionDetails> {
  name: "OpsItemInvalidParameterException";
}

export interface _OpsItemInvalidParameterExceptionDetails {
  /**
   * _OpsItemParameterNamesList shape
   */
  ParameterNames?: Array<string>;

  /**
   * _String shape
   */
  Message?: string;
}
