import { SendBulkTemplatedEmailInput } from "./SendBulkTemplatedEmailInput";
import { SendBulkTemplatedEmailOutput } from "./SendBulkTemplatedEmailOutput";
import { MessageRejected } from "./MessageRejected";
import { MailFromDomainNotVerifiedException } from "./MailFromDomainNotVerifiedException";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { TemplateDoesNotExistException } from "./TemplateDoesNotExistException";
import { ConfigurationSetSendingPausedException } from "./ConfigurationSetSendingPausedException";
import { AccountSendingPausedException } from "./AccountSendingPausedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
