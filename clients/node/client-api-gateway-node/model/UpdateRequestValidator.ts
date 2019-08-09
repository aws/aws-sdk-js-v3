import { UpdateRequestValidatorInput } from "./UpdateRequestValidatorInput";
import { UpdateRequestValidatorOutput } from "./UpdateRequestValidatorOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
