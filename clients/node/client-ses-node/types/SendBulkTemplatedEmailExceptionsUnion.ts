import { MessageRejected } from "./MessageRejected";
import { MailFromDomainNotVerifiedException } from "./MailFromDomainNotVerifiedException";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { TemplateDoesNotExistException } from "./TemplateDoesNotExistException";
import { ConfigurationSetSendingPausedException } from "./ConfigurationSetSendingPausedException";
import { AccountSendingPausedException } from "./AccountSendingPausedException";
export type SendBulkTemplatedEmailExceptionsUnion =
  | MessageRejected
  | MailFromDomainNotVerifiedException
  | ConfigurationSetDoesNotExistException
  | TemplateDoesNotExistException
  | ConfigurationSetSendingPausedException
  | AccountSendingPausedException;
