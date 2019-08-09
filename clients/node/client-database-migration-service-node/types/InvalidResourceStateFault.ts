import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource is in a state that prevents it from being used for database migration.</p>
 */
export interface InvalidResourceStateFault
  extends __ServiceException__<_InvalidResourceStateFaultDetails> {
  name: "InvalidResourceStateFault";
}

export interface _InvalidResourceStateFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
