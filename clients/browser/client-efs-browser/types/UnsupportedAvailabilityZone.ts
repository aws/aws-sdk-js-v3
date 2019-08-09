import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p/>
 */
export interface UnsupportedAvailabilityZone
  extends __ServiceException__<_UnsupportedAvailabilityZoneDetails> {
  name: "UnsupportedAvailabilityZone";
}

export interface _UnsupportedAvailabilityZoneDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
