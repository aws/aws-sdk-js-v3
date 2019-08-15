import { UpdateGraphqlApiInput } from "../shapes/UpdateGraphqlApiInput";
import { UpdateGraphqlApiOutput } from "../shapes/UpdateGraphqlApiOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateGraphqlApi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGraphqlApi",
  http: {
    method: "POST",
    requestUri: "/v1/apis/{apiId}"
  },
  input: {
    shape: UpdateGraphqlApiInput
  },
  output: {
    shape: UpdateGraphqlApiOutput
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
