import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The named resource does not exist.</p>
 */
export interface ResourceNotFound
  extends __ServiceException__<_ResourceNotFoundDetails> {
  name: "ResourceNotFound";
}

export interface _ResourceNotFoundDetails {
  /**
   * <p/>
   */
  message?: string;
}
