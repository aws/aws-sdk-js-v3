import { GetModelTemplateInput } from "../shapes/GetModelTemplateInput";
import { GetModelTemplateOutput } from "../shapes/GetModelTemplateOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
