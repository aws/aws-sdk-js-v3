import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This user, group, or resource name is not allowed in Amazon WorkMail.</p>
 */
export interface ReservedNameException
  extends __ServiceException__<_ReservedNameExceptionDetails> {
  name: "ReservedNameException";
}

export interface _ReservedNameExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
