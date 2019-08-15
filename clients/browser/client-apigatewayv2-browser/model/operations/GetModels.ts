import { GetModelsInput } from "../shapes/GetModelsInput";
import { GetModelsOutput } from "../shapes/GetModelsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetModels: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetModels",
  http: {
    method: "GET",
    requestUri: "/v2/apis/{apiId}/models"
  },
  input: {
    shape: GetModelsInput
  },
  output: {
    shape: GetModelsOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
