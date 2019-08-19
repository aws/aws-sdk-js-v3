import { DeleteStageInput } from "../shapes/DeleteStageInput";
import { DeleteStageOutput } from "../shapes/DeleteStageOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteStage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteStage",
  http: {
    method: "DELETE",
    requestUri: "/restapis/{restapi_id}/stages/{stage_name}"
  },
  input: {
    shape: DeleteStageInput
  },
  output: {
    shape: DeleteStageOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
