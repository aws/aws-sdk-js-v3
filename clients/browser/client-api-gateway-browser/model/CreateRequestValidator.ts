import { CreateRequestValidatorInput } from "./CreateRequestValidatorInput";
import { CreateRequestValidatorOutput } from "./CreateRequestValidatorOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
