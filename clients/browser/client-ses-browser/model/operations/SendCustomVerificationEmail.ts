import { SendCustomVerificationEmailInput } from "../shapes/SendCustomVerificationEmailInput";
import { SendCustomVerificationEmailOutput } from "../shapes/SendCustomVerificationEmailOutput";
import { MessageRejected } from "../shapes/MessageRejected";
import { ConfigurationSetDoesNotExistException } from "../shapes/ConfigurationSetDoesNotExistException";
import { CustomVerificationEmailTemplateDoesNotExistException } from "../shapes/CustomVerificationEmailTemplateDoesNotExistException";
import { FromEmailAddressNotVerifiedException } from "../shapes/FromEmailAddressNotVerifiedException";
import { ProductionAccessNotGrantedException } from "../shapes/ProductionAccessNotGrantedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
