import { DeleteStageInput } from "./DeleteStageInput";
import { DeleteStageOutput } from "./DeleteStageOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
