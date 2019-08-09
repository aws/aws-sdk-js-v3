import { GetModelsInput } from "./GetModelsInput";
import { GetModelsOutput } from "./GetModelsOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
