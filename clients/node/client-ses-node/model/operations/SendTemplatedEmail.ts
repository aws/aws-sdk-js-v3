import { SendTemplatedEmailInput } from "../shapes/SendTemplatedEmailInput";
import { SendTemplatedEmailOutput } from "../shapes/SendTemplatedEmailOutput";
import { MessageRejected } from "../shapes/MessageRejected";
import { MailFromDomainNotVerifiedException } from "../shapes/MailFromDomainNotVerifiedException";
import { ConfigurationSetDoesNotExistException } from "../shapes/ConfigurationSetDoesNotExistException";
import { TemplateDoesNotExistException } from "../shapes/TemplateDoesNotExistException";
import { ConfigurationSetSendingPausedException } from "../shapes/ConfigurationSetSendingPausedException";
import { AccountSendingPausedException } from "../shapes/AccountSendingPausedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SendTemplatedEmail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendTemplatedEmail",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendTemplatedEmailInput
  },
  output: {
    shape: SendTemplatedEmailOutput,
    resultWrapper: "SendTemplatedEmailResult"
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
      shape: TemplateDoesNotExistException
    },
    {
      shape: ConfigurationSetSendingPausedException
    },
    {
      shape: AccountSendingPausedException
    }
  ]
};
