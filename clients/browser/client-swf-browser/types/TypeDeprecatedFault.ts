import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned when the specified activity or workflow type was already deprecated.</p>
 */
export interface TypeDeprecatedFault
  extends __ServiceException__<_TypeDeprecatedFaultDetails> {
  name: "TypeDeprecatedFault";
}

export interface _TypeDeprecatedFaultDetails {
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}
