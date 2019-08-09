import { SendEmailInput } from "./SendEmailInput";
import { SendEmailOutput } from "./SendEmailOutput";
import { MessageRejected } from "./MessageRejected";
import { MailFromDomainNotVerifiedException } from "./MailFromDomainNotVerifiedException";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { ConfigurationSetSendingPausedException } from "./ConfigurationSetSendingPausedException";
import { AccountSendingPausedException } from "./AccountSendingPausedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
