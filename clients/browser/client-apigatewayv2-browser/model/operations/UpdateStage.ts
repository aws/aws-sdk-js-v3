import { UpdateStageInput } from "../shapes/UpdateStageInput";
import { UpdateStageOutput } from "../shapes/UpdateStageOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateStage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateStage",
  http: {
    method: "PATCH",
    requestUri: "/v2/apis/{apiId}/stages/{stageName}"
  },
  input: {
    shape: UpdateStageInput
  },
  output: {
    shape: UpdateStageOutput
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
