import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
 */
export interface UnknownResourceFault
  extends __ServiceException__<_UnknownResourceFaultDetails> {
  name: "UnknownResourceFault";
}

export interface _UnknownResourceFaultDetails {
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}
