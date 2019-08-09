import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operating systems you specified is not supported, or the operation is not supported for the operating system. Valid operating systems include: Windows, AmazonLinux, RedhatEnterpriseLinux, and Ubuntu.</p>
 */
export interface UnsupportedOperatingSystem
  extends __ServiceException__<_UnsupportedOperatingSystemDetails> {
  name: "UnsupportedOperatingSystem";
}

export interface _UnsupportedOperatingSystemDetails {
  /**
   * _String shape
   */
  Message?: string;
}
