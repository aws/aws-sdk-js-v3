import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { AccountSuspendedException } from "./AccountSuspendedException";
import { SendingPausedException } from "./SendingPausedException";
import { MessageRejected } from "./MessageRejected";
import { MailFromDomainNotVerifiedException } from "./MailFromDomainNotVerifiedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
export type SendEmailExceptionsUnion =
  | TooManyRequestsException
  | LimitExceededException
  | AccountSuspendedException
  | SendingPausedException
  | MessageRejected
  | MailFromDomainNotVerifiedException
  | NotFoundException
  | BadRequestException;
