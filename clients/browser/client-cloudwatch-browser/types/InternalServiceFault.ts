import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Request processing has failed due to some unknown error, exception, or failure.</p>
 */
export interface InternalServiceFault
  extends __ServiceException__<_InternalServiceFaultDetails> {
  name: "InternalServiceFault";
}

export interface _InternalServiceFaultDetails {
  /**
   * <p/>
   */
  Message?: string;
}
