import { CreateResourceInput } from "../shapes/CreateResourceInput";
import { CreateResourceOutput } from "../shapes/CreateResourceOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateResource",
  http: {
    method: "POST",
    requestUri: "/restapis/{restapi_id}/resources/{parent_id}"
  },
  input: {
    shape: CreateResourceInput
  },
  output: {
    shape: CreateResourceOutput
  },
  errors: [
    {
      shape: UnauthorizedException
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
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
