import { AccountSuspendedException } from "./AccountSuspendedException";
import { SendingPausedException } from "./SendingPausedException";
import { MessageRejected } from "./MessageRejected";
import { MailFromDomainNotVerifiedException } from "./MailFromDomainNotVerifiedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type CreateDeliverabilityTestReportExceptionsUnion =
  | AccountSuspendedException
  | SendingPausedException
  | MessageRejected
  | MailFromDomainNotVerifiedException
  | NotFoundException
  | TooManyRequestsException
  | LimitExceededException
  | BadRequestException
  | ConcurrentModificationException;
