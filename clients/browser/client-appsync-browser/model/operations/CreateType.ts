import { CreateTypeInput } from "../shapes/CreateTypeInput";
import { CreateTypeOutput } from "../shapes/CreateTypeOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateType",
  http: {
    method: "POST",
    requestUri: "/v1/apis/{apiId}/types"
  },
  input: {
    shape: CreateTypeInput
  },
  output: {
    shape: CreateTypeOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    }
  ]
};
