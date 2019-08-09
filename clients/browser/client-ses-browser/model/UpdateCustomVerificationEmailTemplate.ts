import { UpdateCustomVerificationEmailTemplateInput } from "./UpdateCustomVerificationEmailTemplateInput";
import { UpdateCustomVerificationEmailTemplateOutput } from "./UpdateCustomVerificationEmailTemplateOutput";
import { CustomVerificationEmailTemplateDoesNotExistException } from "./CustomVerificationEmailTemplateDoesNotExistException";
import { FromEmailAddressNotVerifiedException } from "./FromEmailAddressNotVerifiedException";
import { CustomVerificationEmailInvalidContentException } from "./CustomVerificationEmailInvalidContentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
