import { SendEmailInput } from "./SendEmailInput";
import { SendEmailOutput } from "./SendEmailOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { AccountSuspendedException } from "./AccountSuspendedException";
import { SendingPausedException } from "./SendingPausedException";
import { MessageRejected } from "./MessageRejected";
import { MailFromDomainNotVerifiedException } from "./MailFromDomainNotVerifiedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SendEmail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendEmail",
  http: {
    method: "POST",
    requestUri: "/v1/email/outbound-emails"
  },
  input: {
    shape: SendEmailInput
  },
  output: {
    shape: SendEmailOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: AccountSuspendedException
    },
    {
      shape: SendingPausedException
    },
    {
      shape: MessageRejected
    },
    {
      shape: MailFromDomainNotVerifiedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    }
  ]
};
