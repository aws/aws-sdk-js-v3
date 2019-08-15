import { GetModelsInput } from "../shapes/GetModelsInput";
import { GetModelsOutput } from "../shapes/GetModelsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetModels: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetModels",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/models"
  },
  input: {
    shape: GetModelsInput
  },
  output: {
    shape: GetModelsOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
