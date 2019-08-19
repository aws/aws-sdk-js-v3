import { CreateModelInput } from "../shapes/CreateModelInput";
import { CreateModelOutput } from "../shapes/CreateModelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateModel",
  http: {
    method: "POST",
    requestUri: "/restapis/{restapi_id}/models"
  },
  input: {
    shape: CreateModelInput
  },
  output: {
    shape: CreateModelOutput
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
      shape: ConflictException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
