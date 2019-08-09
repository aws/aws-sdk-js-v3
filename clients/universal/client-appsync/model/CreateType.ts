import { CreateTypeInput } from "./CreateTypeInput";
import { CreateTypeOutput } from "./CreateTypeOutput";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
