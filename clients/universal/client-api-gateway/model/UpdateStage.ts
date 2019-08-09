import { UpdateStageInput } from "./UpdateStageInput";
import { UpdateStageOutput } from "./UpdateStageOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
