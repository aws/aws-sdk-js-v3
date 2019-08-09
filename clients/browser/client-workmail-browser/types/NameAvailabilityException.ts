import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The user, group, or resource name isn't unique in Amazon WorkMail.</p>
 */
export interface NameAvailabilityException
  extends __ServiceException__<_NameAvailabilityExceptionDetails> {
  name: "NameAvailabilityException";
}

export interface _NameAvailabilityExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
