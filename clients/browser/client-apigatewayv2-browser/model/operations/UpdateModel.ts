import { UpdateModelInput } from "../shapes/UpdateModelInput";
import { UpdateModelOutput } from "../shapes/UpdateModelOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateModel",
  http: {
    method: "PATCH",
    requestUri: "/v2/apis/{apiId}/models/{modelId}"
  },
  input: {
    shape: UpdateModelInput
  },
  output: {
    shape: UpdateModelOutput
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
    },
    {
      shape: ConflictException
    }
  ]
};
