import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified filter option is not valid. Valid options are Equals and BeginsWith. For Path filter, valid options are Recursive and OneLevel.</p>
 */
export interface InvalidFilterOption
  extends __ServiceException__<_InvalidFilterOptionDetails> {
  name: "InvalidFilterOption";
}

export interface _InvalidFilterOptionDetails {
  /**
   * <p>The specified filter option is not valid. Valid options are Equals and BeginsWith. For Path filter, valid options are Recursive and OneLevel.</p>
   */
  message?: string;
}
