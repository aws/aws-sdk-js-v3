import { GetModelTemplateInput } from "../shapes/GetModelTemplateInput";
import { GetModelTemplateOutput } from "../shapes/GetModelTemplateOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetModelTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetModelTemplate",
  http: {
    method: "GET",
    requestUri: "/v2/apis/{apiId}/models/{modelId}/template"
  },
  input: {
    shape: GetModelTemplateInput
  },
  output: {
    shape: GetModelTemplateOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
