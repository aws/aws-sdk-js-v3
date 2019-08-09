import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if there is no subnet with ID <code>SubnetId</code> provided in the request.</p>
 */
export interface SubnetNotFound
  extends __ServiceException__<_SubnetNotFoundDetails> {
  name: "SubnetNotFound";
}

export interface _SubnetNotFoundDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
