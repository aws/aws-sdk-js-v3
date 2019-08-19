import { SendRawEmailInput } from "../shapes/SendRawEmailInput";
import { SendRawEmailOutput } from "../shapes/SendRawEmailOutput";
import { MessageRejected } from "../shapes/MessageRejected";
import { MailFromDomainNotVerifiedException } from "../shapes/MailFromDomainNotVerifiedException";
import { ConfigurationSetDoesNotExistException } from "../shapes/ConfigurationSetDoesNotExistException";
import { ConfigurationSetSendingPausedException } from "../shapes/ConfigurationSetSendingPausedException";
import { AccountSendingPausedException } from "../shapes/AccountSendingPausedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
