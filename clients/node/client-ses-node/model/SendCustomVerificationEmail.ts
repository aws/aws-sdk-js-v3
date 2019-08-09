import { SendCustomVerificationEmailInput } from "./SendCustomVerificationEmailInput";
import { SendCustomVerificationEmailOutput } from "./SendCustomVerificationEmailOutput";
import { MessageRejected } from "./MessageRejected";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { CustomVerificationEmailTemplateDoesNotExistException } from "./CustomVerificationEmailTemplateDoesNotExistException";
import { FromEmailAddressNotVerifiedException } from "./FromEmailAddressNotVerifiedException";
import { ProductionAccessNotGrantedException } from "./ProductionAccessNotGrantedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SendCustomVerificationEmail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendCustomVerificationEmail",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendCustomVerificationEmailInput
  },
  output: {
    shape: SendCustomVerificationEmailOutput,
    resultWrapper: "SendCustomVerificationEmailResult"
  },
  errors: [
    {
      shape: MessageRejected
    },
    {
      shape: ConfigurationSetDoesNotExistException
    },
    {
      shape: CustomVerificationEmailTemplateDoesNotExistException
    },
    {
      shape: FromEmailAddressNotVerifiedException
    },
    {
      shape: ProductionAccessNotGrantedException
    }
  ]
};
