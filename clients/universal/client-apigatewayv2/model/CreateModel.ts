import { CreateModelInput } from "./CreateModelInput";
import { CreateModelOutput } from "./CreateModelOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
