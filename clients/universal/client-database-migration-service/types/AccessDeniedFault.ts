import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>AWS DMS was denied access to the endpoint. Check that the role is correctly configured.</p>
 */
export interface AccessDeniedFault
  extends __ServiceException__<_AccessDeniedFaultDetails> {
  name: "AccessDeniedFault";
}

export interface _AccessDeniedFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
