import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The message can't be sent because the sending domain isn't verified.</p>
 */
export interface MailFromDomainNotVerifiedException
  extends __ServiceException__<_MailFromDomainNotVerifiedExceptionDetails> {
  name: "MailFromDomainNotVerifiedException";
}

export interface _MailFromDomainNotVerifiedExceptionDetails {}
