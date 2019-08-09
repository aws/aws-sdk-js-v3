import { MessageRejected } from "./MessageRejected";
import { MailFromDomainNotVerifiedException } from "./MailFromDomainNotVerifiedException";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { ConfigurationSetSendingPausedException } from "./ConfigurationSetSendingPausedException";
import { AccountSendingPausedException } from "./AccountSendingPausedException";
export type SendEmailExceptionsUnion =
  | MessageRejected
  | MailFromDomainNotVerifiedException
  | ConfigurationSetDoesNotExistException
  | ConfigurationSetSendingPausedException
  | AccountSendingPausedException;
