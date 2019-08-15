import { CreateStageInput } from "../shapes/CreateStageInput";
import { CreateStageOutput } from "../shapes/CreateStageOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateStage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStage",
  http: {
    method: "POST",
    requestUri: "/restapis/{restapi_id}/stages"
  },
  input: {
    shape: CreateStageInput
  },
  output: {
    shape: CreateStageOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: BadRequestException
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
