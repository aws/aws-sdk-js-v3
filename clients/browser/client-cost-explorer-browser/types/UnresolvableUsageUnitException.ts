import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Cost Explorer was unable to identify the usage unit. Provide <code>UsageType/UsageTypeGroup</code> filter selections that contain matching units, for example: <code>hours</code>.</p>
 */
export interface UnresolvableUsageUnitException
  extends __ServiceException__<_UnresolvableUsageUnitExceptionDetails> {
  name: "UnresolvableUsageUnitException";
}

export interface _UnresolvableUsageUnitExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
