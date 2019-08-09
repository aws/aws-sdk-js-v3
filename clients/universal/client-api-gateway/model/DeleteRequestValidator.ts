import { DeleteRequestValidatorInput } from "./DeleteRequestValidatorInput";
import { DeleteRequestValidatorOutput } from "./DeleteRequestValidatorOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
