import { GetModelTemplateInput } from "./GetModelTemplateInput";
import { GetModelTemplateOutput } from "./GetModelTemplateOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetModelTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetModelTemplate",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/models/{model_name}/default_template"
  },
  input: {
    shape: GetModelTemplateInput
  },
  output: {
    shape: GetModelTemplateOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
