import { CreateModelInput } from "../shapes/CreateModelInput";
import { CreateModelOutput } from "../shapes/CreateModelOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateModel",
  http: {
    method: "POST",
    requestUri: "/v2/apis/{apiId}/models"
  },
  input: {
    shape: CreateModelInput
  },
  output: {
    shape: CreateModelOutput
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
