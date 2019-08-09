import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The default root object file name is too big or contains an invalid character.</p>
 */
export interface InvalidDefaultRootObject
  extends __ServiceException__<_InvalidDefaultRootObjectDetails> {
  name: "InvalidDefaultRootObject";
}

export interface _InvalidDefaultRootObjectDetails {
  /**
   * _string shape
   */
  Message?: string;
}
