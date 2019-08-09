import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if <code>IpAddress</code> was not specified in the request and there are no free IP addresses in the subnet.</p>
 */
export interface NoFreeAddressesInSubnet
  extends __ServiceException__<_NoFreeAddressesInSubnetDetails> {
  name: "NoFreeAddressesInSubnet";
}

export interface _NoFreeAddressesInSubnetDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
