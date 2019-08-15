import { UpdateStageInput } from "../shapes/UpdateStageInput";
import { UpdateStageOutput } from "../shapes/UpdateStageOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateStage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateStage",
  http: {
    method: "PATCH",
    requestUri: "/restapis/{restapi_id}/stages/{stage_name}"
  },
  input: {
    shape: UpdateStageInput
  },
  output: {
    shape: UpdateStageOutput
  },
  errors: [
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
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
