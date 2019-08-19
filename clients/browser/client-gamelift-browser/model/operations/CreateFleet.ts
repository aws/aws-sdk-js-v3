import { CreateFleetInput } from "../shapes/CreateFleetInput";
import { CreateFleetOutput } from "../shapes/CreateFleetOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFleet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateFleetInput
  },
  output: {
    shape: CreateFleetOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ConflictException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    }
  ]
};
