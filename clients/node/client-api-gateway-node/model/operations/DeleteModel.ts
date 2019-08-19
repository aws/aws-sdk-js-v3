import { DeleteModelInput } from "../shapes/DeleteModelInput";
import { DeleteModelOutput } from "../shapes/DeleteModelOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteModel",
  http: {
    method: "DELETE",
    requestUri: "/restapis/{restapi_id}/models/{model_name}"
  },
  input: {
    shape: DeleteModelInput
  },
  output: {
    shape: DeleteModelOutput
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
    },
    {
      shape: ConflictException
    }
  ]
};
