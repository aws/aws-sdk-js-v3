import { UpdateCustomVerificationEmailTemplateInput } from "../shapes/UpdateCustomVerificationEmailTemplateInput";
import { UpdateCustomVerificationEmailTemplateOutput } from "../shapes/UpdateCustomVerificationEmailTemplateOutput";
import { CustomVerificationEmailTemplateDoesNotExistException } from "../shapes/CustomVerificationEmailTemplateDoesNotExistException";
import { FromEmailAddressNotVerifiedException } from "../shapes/FromEmailAddressNotVerifiedException";
import { CustomVerificationEmailInvalidContentException } from "../shapes/CustomVerificationEmailInvalidContentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateCustomVerificationEmailTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCustomVerificationEmailTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateCustomVerificationEmailTemplateInput
  },
  output: {
    shape: UpdateCustomVerificationEmailTemplateOutput
  },
  errors: [
    {
      shape: CustomVerificationEmailTemplateDoesNotExistException
    },
    {
      shape: FromEmailAddressNotVerifiedException
    },
    {
      shape: CustomVerificationEmailInvalidContentException
    }
  ]
};
