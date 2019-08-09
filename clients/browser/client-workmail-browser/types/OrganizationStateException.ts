import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
 */
export interface OrganizationStateException
  extends __ServiceException__<_OrganizationStateExceptionDetails> {
  name: "OrganizationStateException";
}

export interface _OrganizationStateExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
