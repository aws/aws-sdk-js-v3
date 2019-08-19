import { GetCustomVerificationEmailTemplateInput } from "../shapes/GetCustomVerificationEmailTemplateInput";
import { GetCustomVerificationEmailTemplateOutput } from "../shapes/GetCustomVerificationEmailTemplateOutput";
import { CustomVerificationEmailTemplateDoesNotExistException } from "../shapes/CustomVerificationEmailTemplateDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCustomVerificationEmailTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCustomVerificationEmailTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCustomVerificationEmailTemplateInput
  },
  output: {
    shape: GetCustomVerificationEmailTemplateOutput,
    resultWrapper: "GetCustomVerificationEmailTemplateResult"
  },
  errors: [
    {
      shape: CustomVerificationEmailTemplateDoesNotExistException
    }
  ]
};
