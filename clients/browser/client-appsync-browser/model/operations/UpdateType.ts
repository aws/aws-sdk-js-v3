import { UpdateTypeInput } from "../shapes/UpdateTypeInput";
import { UpdateTypeOutput } from "../shapes/UpdateTypeOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateType",
  http: {
    method: "POST",
    requestUri: "/v1/apis/{apiId}/types/{typeName}"
  },
  input: {
    shape: UpdateTypeInput
  },
  output: {
    shape: UpdateTypeOutput
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
