import { UpdateStageInput } from "./UpdateStageInput";
import { UpdateStageOutput } from "./UpdateStageOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
