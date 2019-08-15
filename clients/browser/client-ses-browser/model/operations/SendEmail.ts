import { SendEmailInput } from "../shapes/SendEmailInput";
import { SendEmailOutput } from "../shapes/SendEmailOutput";
import { MessageRejected } from "../shapes/MessageRejected";
import { MailFromDomainNotVerifiedException } from "../shapes/MailFromDomainNotVerifiedException";
import { ConfigurationSetDoesNotExistException } from "../shapes/ConfigurationSetDoesNotExistException";
import { ConfigurationSetSendingPausedException } from "../shapes/ConfigurationSetSendingPausedException";
import { AccountSendingPausedException } from "../shapes/AccountSendingPausedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SendEmail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendEmail",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendEmailInput
  },
  output: {
    shape: SendEmailOutput,
    resultWrapper: "SendEmailResult"
  },
  errors: [
    {
      shape: MessageRejected
    },
    {
      shape: MailFromDomainNotVerifiedException
    },
    {
      shape: ConfigurationSetDoesNotExistException
    },
    {
      shape: ConfigurationSetSendingPausedException
    },
    {
      shape: AccountSendingPausedException
    }
  ]
};
