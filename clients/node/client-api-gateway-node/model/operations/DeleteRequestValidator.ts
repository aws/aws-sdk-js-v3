import { DeleteRequestValidatorInput } from "../shapes/DeleteRequestValidatorInput";
import { DeleteRequestValidatorOutput } from "../shapes/DeleteRequestValidatorOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRequestValidator: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRequestValidator",
  http: {
    method: "DELETE",
    requestUri: "/restapis/{restapi_id}/requestvalidators/{requestvalidator_id}"
  },
  input: {
    shape: DeleteRequestValidatorInput
  },
  output: {
    shape: DeleteRequestValidatorOutput
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
