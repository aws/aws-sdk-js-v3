import { SendEmailInput } from "../shapes/SendEmailInput";
import { SendEmailOutput } from "../shapes/SendEmailOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccountSuspendedException } from "../shapes/AccountSuspendedException";
import { SendingPausedException } from "../shapes/SendingPausedException";
import { MessageRejected } from "../shapes/MessageRejected";
import { MailFromDomainNotVerifiedException } from "../shapes/MailFromDomainNotVerifiedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
