import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A web ACL id specified in the response body is not valid.</p>
 */
export interface InvalidWebACLId
  extends __ServiceException__<_InvalidWebACLIdDetails> {
  name: "InvalidWebACLId";
}

export interface _InvalidWebACLIdDetails {
  /**
   * _string shape
   */
  Message?: string;
}
