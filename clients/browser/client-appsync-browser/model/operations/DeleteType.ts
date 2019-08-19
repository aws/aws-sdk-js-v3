import { DeleteTypeInput } from "../shapes/DeleteTypeInput";
import { DeleteTypeOutput } from "../shapes/DeleteTypeOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteType",
  http: {
    method: "DELETE",
    requestUri: "/v1/apis/{apiId}/types/{typeName}"
  },
  input: {
    shape: DeleteTypeInput
  },
  output: {
    shape: DeleteTypeOutput
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
