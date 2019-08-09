import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The CNAME specified is already defined for CloudFront.</p>
 */
export interface CNAMEAlreadyExists
  extends __ServiceException__<_CNAMEAlreadyExistsDetails> {
  name: "CNAMEAlreadyExists";
}

export interface _CNAMEAlreadyExistsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
