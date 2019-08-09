import { CreateStageInput } from "./CreateStageInput";
import { CreateStageOutput } from "./CreateStageOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
