import { CreateCustomVerificationEmailTemplateInput } from "./CreateCustomVerificationEmailTemplateInput";
import { CreateCustomVerificationEmailTemplateOutput } from "./CreateCustomVerificationEmailTemplateOutput";
import { CustomVerificationEmailTemplateAlreadyExistsException } from "./CustomVerificationEmailTemplateAlreadyExistsException";
import { FromEmailAddressNotVerifiedException } from "./FromEmailAddressNotVerifiedException";
import { CustomVerificationEmailInvalidContentException } from "./CustomVerificationEmailInvalidContentException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateCustomVerificationEmailTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCustomVerificationEmailTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCustomVerificationEmailTemplateInput
  },
  output: {
    shape: CreateCustomVerificationEmailTemplateOutput
  },
  errors: [
    {
      shape: CustomVerificationEmailTemplateAlreadyExistsException
    },
    {
      shape: FromEmailAddressNotVerifiedException
    },
    {
      shape: CustomVerificationEmailInvalidContentException
    },
    {
      shape: LimitExceededException
    }
  ]
};
