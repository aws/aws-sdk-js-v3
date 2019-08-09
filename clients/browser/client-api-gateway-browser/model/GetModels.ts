import { GetModelsInput } from "./GetModelsInput";
import { GetModelsOutput } from "./GetModelsOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
