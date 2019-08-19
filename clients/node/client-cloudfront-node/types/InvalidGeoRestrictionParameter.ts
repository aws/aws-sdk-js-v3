import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified geo restriction parameter is not valid.</p>
 */
export interface InvalidGeoRestrictionParameter
  extends __ServiceException__<_InvalidGeoRestrictionParameterDetails> {
  name: "InvalidGeoRestrictionParameter";
}

export interface _InvalidGeoRestrictionParameterDetails {
  /**
   * _string shape
   */
  Message?: string;
}
