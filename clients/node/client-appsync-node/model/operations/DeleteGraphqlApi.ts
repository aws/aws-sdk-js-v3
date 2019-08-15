import { DeleteGraphqlApiInput } from "../shapes/DeleteGraphqlApiInput";
import { DeleteGraphqlApiOutput } from "../shapes/DeleteGraphqlApiOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteGraphqlApi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteGraphqlApi",
  http: {
    method: "DELETE",
    requestUri: "/v1/apis/{apiId}"
  },
  input: {
    shape: DeleteGraphqlApiInput
  },
  output: {
    shape: DeleteGraphqlApiOutput
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
    },
    {
      shape: AccessDeniedException
    }
  ]
};
