import { UpdateModelInput } from "../shapes/UpdateModelInput";
import { UpdateModelOutput } from "../shapes/UpdateModelOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateModel",
  http: {
    method: "PATCH",
    requestUri: "/restapis/{restapi_id}/models/{model_name}"
  },
  input: {
    shape: UpdateModelInput
  },
  output: {
    shape: UpdateModelOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
