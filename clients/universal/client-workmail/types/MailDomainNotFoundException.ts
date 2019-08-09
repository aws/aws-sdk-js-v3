import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>For an email or alias to be created in Amazon WorkMail, the included domain must be defined in the organization.</p>
 */
export interface MailDomainNotFoundException
  extends __ServiceException__<_MailDomainNotFoundExceptionDetails> {
  name: "MailDomainNotFoundException";
}

export interface _MailDomainNotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
