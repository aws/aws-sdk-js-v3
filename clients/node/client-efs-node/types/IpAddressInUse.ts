import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if the request specified an <code>IpAddress</code> that is already in use in the subnet.</p>
 */
export interface IpAddressInUse
  extends __ServiceException__<_IpAddressInUseDetails> {
  name: "IpAddressInUse";
}

export interface _IpAddressInUseDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
