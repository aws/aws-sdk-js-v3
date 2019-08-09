import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> Indicates that the message could not be sent because Amazon SES could not read the MX record required to use the specified MAIL FROM domain. For information about editing the custom MAIL FROM domain settings for an identity, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-edit.html">Amazon SES Developer Guide</a>.</p>
 */
export interface MailFromDomainNotVerifiedException
  extends __ServiceException__<_MailFromDomainNotVerifiedExceptionDetails> {
  name: "MailFromDomainNotVerifiedException";
}

export interface _MailFromDomainNotVerifiedExceptionDetails {}
