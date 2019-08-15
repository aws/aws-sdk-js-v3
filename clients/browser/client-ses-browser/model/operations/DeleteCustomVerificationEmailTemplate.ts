import { DeleteCustomVerificationEmailTemplateInput } from "../shapes/DeleteCustomVerificationEmailTemplateInput";
import { DeleteCustomVerificationEmailTemplateOutput } from "../shapes/DeleteCustomVerificationEmailTemplateOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteCustomVerificationEmailTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCustomVerificationEmailTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCustomVerificationEmailTemplateInput
  },
  output: {
    shape: DeleteCustomVerificationEmailTemplateOutput
  },
  errors: []
};
