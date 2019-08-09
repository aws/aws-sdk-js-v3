import { CreateFleetInput } from "./CreateFleetInput";
import { CreateFleetOutput } from "./CreateFleetOutput";
import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
