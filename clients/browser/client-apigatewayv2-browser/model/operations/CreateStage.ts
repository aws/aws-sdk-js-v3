import { CreateStageInput } from "../shapes/CreateStageInput";
import { CreateStageOutput } from "../shapes/CreateStageOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateStage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStage",
  http: {
    method: "POST",
    requestUri: "/v2/apis/{apiId}/stages"
  },
  input: {
    shape: CreateStageInput
  },
  output: {
    shape: CreateStageOutput
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
