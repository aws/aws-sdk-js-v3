import { MessageRejected } from "./MessageRejected";
import { MailFromDomainNotVerifiedException } from "./MailFromDomainNotVerifiedException";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { ConfigurationSetSendingPausedException } from "./ConfigurationSetSendingPausedException";
import { AccountSendingPausedException } from "./AccountSendingPausedException";
export type SendRawEmailExceptionsUnion =
  | MessageRejected
  | MailFromDomainNotVerifiedException
  | ConfigurationSetDoesNotExistException
  | ConfigurationSetSendingPausedException
  | AccountSendingPausedException;
