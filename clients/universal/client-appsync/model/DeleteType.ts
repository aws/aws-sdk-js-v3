import { DeleteTypeInput } from "./DeleteTypeInput";
import { DeleteTypeOutput } from "./DeleteTypeOutput";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
