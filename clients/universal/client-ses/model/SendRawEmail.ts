import { SendRawEmailInput } from "./SendRawEmailInput";
import { SendRawEmailOutput } from "./SendRawEmailOutput";
import { MessageRejected } from "./MessageRejected";
import { MailFromDomainNotVerifiedException } from "./MailFromDomainNotVerifiedException";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { ConfigurationSetSendingPausedException } from "./ConfigurationSetSendingPausedException";
import { AccountSendingPausedException } from "./AccountSendingPausedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SendRawEmail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendRawEmail",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendRawEmailInput
  },
  output: {
    shape: SendRawEmailOutput,
    resultWrapper: "SendRawEmailResult"
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
