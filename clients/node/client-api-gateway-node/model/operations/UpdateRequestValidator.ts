import { UpdateRequestValidatorInput } from "../shapes/UpdateRequestValidatorInput";
import { UpdateRequestValidatorOutput } from "../shapes/UpdateRequestValidatorOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateRequestValidator: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRequestValidator",
  http: {
    method: "PATCH",
    requestUri: "/restapis/{restapi_id}/requestvalidators/{requestvalidator_id}"
  },
  input: {
    shape: UpdateRequestValidatorInput
  },
  output: {
    shape: UpdateRequestValidatorOutput
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
      shape: TooManyRequestsException
    }
  ]
};
