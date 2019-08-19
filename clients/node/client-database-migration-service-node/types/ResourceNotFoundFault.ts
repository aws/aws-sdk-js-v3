import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource could not be found.</p>
 */
export interface ResourceNotFoundFault
  extends __ServiceException__<_ResourceNotFoundFaultDetails> {
  name: "ResourceNotFoundFault";
}

export interface _ResourceNotFoundFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
