import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned when the specified domain has been deprecated.</p>
 */
export interface DomainDeprecatedFault
  extends __ServiceException__<_DomainDeprecatedFaultDetails> {
  name: "DomainDeprecatedFault";
}

export interface _DomainDeprecatedFaultDetails {
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}
