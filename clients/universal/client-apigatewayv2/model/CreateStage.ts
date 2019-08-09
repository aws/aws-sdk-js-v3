import { CreateStageInput } from "./CreateStageInput";
import { CreateStageOutput } from "./CreateStageOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
