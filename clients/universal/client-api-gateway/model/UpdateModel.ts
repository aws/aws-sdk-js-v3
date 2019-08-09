import { UpdateModelInput } from "./UpdateModelInput";
import { UpdateModelOutput } from "./UpdateModelOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
