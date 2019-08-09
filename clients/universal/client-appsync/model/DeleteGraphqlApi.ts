import { DeleteGraphqlApiInput } from "./DeleteGraphqlApiInput";
import { DeleteGraphqlApiOutput } from "./DeleteGraphqlApiOutput";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
