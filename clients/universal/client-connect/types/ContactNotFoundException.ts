import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The contact with the specified ID is not active or does not exist.</p>
 */
export interface ContactNotFoundException
  extends __ServiceException__<_ContactNotFoundExceptionDetails> {
  name: "ContactNotFoundException";
}

export interface _ContactNotFoundExceptionDetails {
  /**
   * <p>The message.</p>
   */
  Message?: string;
}
