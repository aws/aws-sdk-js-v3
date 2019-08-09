import { GetCustomVerificationEmailTemplateInput } from "./GetCustomVerificationEmailTemplateInput";
import { GetCustomVerificationEmailTemplateOutput } from "./GetCustomVerificationEmailTemplateOutput";
import { CustomVerificationEmailTemplateDoesNotExistException } from "./CustomVerificationEmailTemplateDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
