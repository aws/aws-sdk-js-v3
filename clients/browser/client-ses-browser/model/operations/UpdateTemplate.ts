import { UpdateTemplateInput } from "../shapes/UpdateTemplateInput";
import { UpdateTemplateOutput } from "../shapes/UpdateTemplateOutput";
import { TemplateDoesNotExistException } from "../shapes/TemplateDoesNotExistException";
import { InvalidTemplateException } from "../shapes/InvalidTemplateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateTemplateInput
  },
  output: {
    shape: UpdateTemplateOutput,
    resultWrapper: "UpdateTemplateResult"
  },
  errors: [
    {
      shape: TemplateDoesNotExistException
    },
    {
      shape: InvalidTemplateException
    }
  ]
};
