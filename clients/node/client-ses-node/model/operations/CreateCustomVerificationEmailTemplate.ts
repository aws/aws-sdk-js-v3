import { CreateCustomVerificationEmailTemplateInput } from "../shapes/CreateCustomVerificationEmailTemplateInput";
import { CreateCustomVerificationEmailTemplateOutput } from "../shapes/CreateCustomVerificationEmailTemplateOutput";
import { CustomVerificationEmailTemplateAlreadyExistsException } from "../shapes/CustomVerificationEmailTemplateAlreadyExistsException";
import { FromEmailAddressNotVerifiedException } from "../shapes/FromEmailAddressNotVerifiedException";
import { CustomVerificationEmailInvalidContentException } from "../shapes/CustomVerificationEmailInvalidContentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
