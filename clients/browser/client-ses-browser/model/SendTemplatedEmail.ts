import { SendTemplatedEmailInput } from "./SendTemplatedEmailInput";
import { SendTemplatedEmailOutput } from "./SendTemplatedEmailOutput";
import { MessageRejected } from "./MessageRejected";
import { MailFromDomainNotVerifiedException } from "./MailFromDomainNotVerifiedException";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { TemplateDoesNotExistException } from "./TemplateDoesNotExistException";
import { ConfigurationSetSendingPausedException } from "./ConfigurationSetSendingPausedException";
import { AccountSendingPausedException } from "./AccountSendingPausedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
