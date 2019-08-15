import { SendBulkTemplatedEmailInput } from "../shapes/SendBulkTemplatedEmailInput";
import { SendBulkTemplatedEmailOutput } from "../shapes/SendBulkTemplatedEmailOutput";
import { MessageRejected } from "../shapes/MessageRejected";
import { MailFromDomainNotVerifiedException } from "../shapes/MailFromDomainNotVerifiedException";
import { ConfigurationSetDoesNotExistException } from "../shapes/ConfigurationSetDoesNotExistException";
import { TemplateDoesNotExistException } from "../shapes/TemplateDoesNotExistException";
import { ConfigurationSetSendingPausedException } from "../shapes/ConfigurationSetSendingPausedException";
import { AccountSendingPausedException } from "../shapes/AccountSendingPausedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SendBulkTemplatedEmail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendBulkTemplatedEmail",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendBulkTemplatedEmailInput
  },
  output: {
    shape: SendBulkTemplatedEmailOutput,
    resultWrapper: "SendBulkTemplatedEmailResult"
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
