import { CreateRequestValidatorInput } from "../shapes/CreateRequestValidatorInput";
import { CreateRequestValidatorOutput } from "../shapes/CreateRequestValidatorOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRequestValidator: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRequestValidator",
  http: {
    method: "POST",
    requestUri: "/restapis/{restapi_id}/requestvalidators"
  },
  input: {
    shape: CreateRequestValidatorInput
  },
  output: {
    shape: CreateRequestValidatorOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
