import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified options are incompatible.</p>
 */
export interface IncompatibleOrderableOptions
  extends __ServiceException__<_IncompatibleOrderableOptionsDetails> {
  name: "IncompatibleOrderableOptions";
}

export interface _IncompatibleOrderableOptionsDetails {}
