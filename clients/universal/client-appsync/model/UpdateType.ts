import { UpdateTypeInput } from "./UpdateTypeInput";
import { UpdateTypeOutput } from "./UpdateTypeOutput";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
