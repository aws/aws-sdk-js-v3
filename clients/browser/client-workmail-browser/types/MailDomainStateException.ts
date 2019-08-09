import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>After a domain has been added to the organization, it must be verified. The domain is not yet verified.</p>
 */
export interface MailDomainStateException
  extends __ServiceException__<_MailDomainStateExceptionDetails> {
  name: "MailDomainStateException";
}

export interface _MailDomainStateExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
